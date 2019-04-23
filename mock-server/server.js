'use strict';
/**************************************************************************************************
 * This sample demonstrates a few more advanced features of Swagger-Express-Middleware,
 * such as setting a few options, initializing the mock data store, and adding custom middleware logic.
 **************************************************************************************************/
const path = require('path');
const fs = require('fs');
const express = require('express');
const swagger = require('swagger-express-middleware');
const Middleware = swagger.Middleware;
const MemoryDataStore = swagger.MemoryDataStore;
const FileDataStore = swagger.FileDataStore;
const Resource = swagger.Resource;

let app = express();
let middleware = new Middleware(app);

// Initialize Swagger Express Middleware with our Swagger file
let swaggerFile = path.join(__dirname, 'swagger', 'heroes.yaml');
middleware.init(swaggerFile, (err) => {
  const mode = process.argv.slice(2)[0];
  const datastore = getDatastore(mode);

  // Enable Express' case-sensitive and strict options
  app.enable('case sensitive routing');
  app.enable('strict routing');
  
  // Enable auto-parsing JSON payloads.
  app.use(express.json());
  
  // Enable swagger middlewares.
  app.use(
    middleware.metadata(), // Annotates each request with all info from the Swagger definition.
    middleware.CORS(), // Add appropriate CORS headers to each request.
    middleware.validateRequest(), // Ensure that every request complies with the Swagger definition.
    middleware.mock(datastore) // Mock implementations for every operations from the Swagger definition.
  );

  loadCustomMiddlewares(app, datastore);
  loadCustomErrorHandler(app);

  // Start server.
  app.listen(3000, () => {
    console.log(`The Mock Server is now running at port 3000 in ${mode.toUpperCase()} mode.`);
  });
});

/**
 * Get Swagger-Express-Middleware datastore based on mode
 * @param {string} mode Server mode.
 */
function getDatastore(mode) {
  let datastore;
  if (mode === 'readonly') {
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, 'mocks', 'api', 'heroes.json')));
    datastore = new MemoryDataStore();
    datastore.save(Resource.parse(data));
  } else {
    datastore = new FileDataStore(path.join(__dirname, 'mocks'));
  }

  return datastore;
}

function loadCustomMiddlewares(app, datastore) {
  // Generate unique id when add new heroes.
  app.post('/api/heroes', (req, res, next) => {
    datastore.getCollection('/api/heroes', (err, heroes) => {
      let heroId = heroes.length > 0 ? Math.max(...heroes.map(hero => hero.data.id)) + 1 : 11;

      datastore.save(new Resource(`/api/heroes/${heroId}`, { id: heroId, name: req.body.name }), (err, newHero) => {
        res.json(newHero.data);
      });
    });
  });
}

function loadCustomErrorHandler(app) {
  // Error handler
  app.use((err, req, res, next) => {
    let errorMessage = `${err.status} Error - ${err.message}`;
    res.status(err.status);
    res.send(errorMessage);
    console.log(errorMessage);
  });
}