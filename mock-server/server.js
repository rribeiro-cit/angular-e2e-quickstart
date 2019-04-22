/**
 * NodeJS Mock-Server using json-server.
 */
const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const mode = process.argv.slice(2)[0];
let db = path.join(__dirname, 'db.json');
if (mode === 'readonly') {
  db = JSON.parse(fs.readFileSync(db));
}

const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const server = jsonServer.create();
server.use(middlewares);
server.use('/api', router);

server.listen(3000, () => {
  console.log('Mock-Server is running on port 3000.');
});