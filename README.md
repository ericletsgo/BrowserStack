BrowserStack Assignment

This repo will run 3 tests across 5 browsers via BrowserStack. All code is written in NodeJS and can be
run on Jenkins server.
All 3 tests are in the test folder and browser configuration is in config.json in said folder.

Steps for setup:

1. Input user name in ./test/config.json
2. Input browserstack key in ./test/config.json
3. Run 'npm install'
4. Run 'npm test' 
5. Test can then be viewed from BrowserStack GUI on https://automate.browserstack.com/dashboard/v2

All tests are also able to be run on Jenkins server through the Jenkinsfile pipeline