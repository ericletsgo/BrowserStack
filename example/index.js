var seleniumRunner = require('../');

// tests to run
var tests = [
  {
    url: 'http://www.google.com',
    exec: require('./check-title-google.js')
  },
  {
    url: 'http://www.google.com',
    exec: require('./check-url.js')
  },
  {
    url: 'http://www.yahoo.com',
    exec: require('./check-title-yahoo.js')
  }
];

var config = require('./config.json');

// launch tests
seleniumRunner(config, tests, testCallback, endCallback);

// For each browser, you get the result of calling your test (check-title) here
// You always get the context: browser + called url
function testCallback(err, context) {
  console.log('A test finished', arguments);
}

// Called when all tests have finished/or an error popped while connecting to the grid
// It will not get called when an error is emitted from a test
function endCallback(err) {
  console.log('All tests ended', arguments);
}
