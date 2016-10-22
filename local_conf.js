const date = new Date()

// Defining nice console reporter
const JasmineReporter = require('jasmine2-reporter').Jasmine2Reporter

exports.config = {
  // Will be used as URL to open pages with browser.get
  baseUrl: 'http://www.hiteshbalar.com/preserver',

  // What specs files to load?
  specs: ['./specs/*_spec.js'],

  // Allows us to not start selenium server for tests. Useful for development.
  directConnect: true,

  // Test runner to use
  framework: 'jasmine2',

  /**
   Browser properties, also called as DesiredCapabilities.
   Allows to configure a lot of browser aspects.
   Documentation for NOT FULL list of capabilites could be found here:
   https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
   */
  // capabilities: {
  //     'browserName': 'chrome',
  // },

  // running a number of browsers at the same time
  multiCapabilities: [
    // {
    //     'browserName': 'firefox'
    // },
    {
      browserName: 'chrome',
    },
  ],

  // This tells protractor that we have Angular 2 app on the page,
  // so synchronizing with it should be done differently than with Angular 1
  useAllAngular2AppRoots: true,

  /**
   Some of protractor life-circle methods. Provided function will be called
   when browser is started, and your test runner (jasmine2) is initialized.
   You can define some extra logic here, such as reporters, pre/post conditions.
   */
  onPrepare: function () {

    // Setting global beforeAll for all test suites.
    beforeAll(function () {
      browser.get('/')
    })
    // Global beforeEach for all tests (aka. it)
    beforeEach(function () {
      //
    })
    // Global afterAll for all test suits
    afterAll(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear() window.localStorage.clear()')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
    })
    // Options object for console reporter
    const options = {
      pendingSpec: false,
      symbols: {
        pending: '*  '.strikethrough,
      },
    }
    // Adding reporter to Jasmine
    jasmine.getEnv().addReporter(new JasmineReporter(options))
  },
}
