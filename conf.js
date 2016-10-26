exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  rootElement: 'todo-app',
  capabilities: { 'browserName': 'chrome' },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: function (){
    browser.driver.manage().window().setSize(1600, 800);
    
    // suppress stack trace in 
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'summary'
    }))
  },
  suites: {
    todo: 'specs/**/*Spec.js',
  }
};