describe('todo mvc angular2', function() {

  // 1. 
  describe('static page contents', function () {

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.driver.get('http://todomvc.com/examples/angular2/');
      element(by.css('body')).sendKeys(protractor.Key.RETURN); // activate page if slow HACK
    });

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Angular2 • TodoMVC');
    });

    it('should have a page title', function (){
      expect(
        element(by.css('.header h1')).getText()).toEqual('todos');
    })

    it('should have empty placeholder text', function (){
      expect(
        element(by.css('.new-todo')).getAttribute('placeholder')).toEqual('What needs to be done?');
    })

    it('should have footer text help', function () {
      expect(
        element(by.css('.info')).getText()
      ).toContain('Double-click to edit a todo');
    });

  }); //static page contents

  // 2. 
  describe('creating todos', function () {
    
    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.driver.get('http://todomvc.com/examples/angular2/');
      element(by.css('body')).sendKeys(protractor.Key.RETURN); // activate page if slow HACK
    });
    
    it('should create a todo', function () {
      element(by.css('input.new-todo')).sendKeys('this is a test', 
      protractor.Key.RETURN);

      expect(element(by.css('section .main')).isPresent()).toBe(true);

    });
  }); //create
  
  // 3.
  describe('deleting todos', function () {

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.driver.get('http://todomvc.com/examples/angular2/');
      element(by.css('body')).sendKeys(protractor.Key.RETURN); // activate page if slow HACK

      element(by.css('input.new-todo')).sendKeys('delete this todo', 
        protractor.Key.RETURN);
    });

    it('should delete a todo', function () {

    });
  }); //delete

  // 4. 
  describe('updating todos', function () {
    
    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.driver.get('http://todomvc.com/examples/angular2/');
      element(by.css('body')).sendKeys(protractor.Key.RETURN); // activate page if slow HACK
      
      element(by.css('input.new-todo')).sendKeys('update this todo', 
        protractor.Key.RETURN);
    });
    
    it('should update a todo', function () {

    });
  }); // update

  // 5. 
  describe('todo interaction', function () {
    
    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.driver.get('http://todomvc.com/examples/angular2/');
      element(by.css('body')).sendKeys(protractor.Key.RETURN); // activate page if slow HACK
    });
    
    it('should check off a task by click', function () {

    });
    it('should check off multiple tasks by clicks', function () {

    });

    it('should toggle multiple tasks by caret', function () {

    });
  }); //interaction
  
});