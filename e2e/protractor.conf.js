// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu" ]
    },
  },
  specs: [
    './src/features/*.feature'
  ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: './src/steps/*.step.ts',
    tags: [], // Specific features or scenarios
    strict: true,
    'dry-run': false,
    compiler: [],   
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

    var chai = require('chai');
    chai.use(require('chai-as-promised'));
  }
};