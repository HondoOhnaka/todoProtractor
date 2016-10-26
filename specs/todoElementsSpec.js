Angular2TodoPage = require('../page-objects/todo.po.js');

describe('page contents', function () {

    todoPage = new Angular2TodoPage();

    beforeEach(function() {
        todoPage.runBeforeEach();
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
        todoPage.todoInput.getAttribute('placeholder')).toEqual('What needs to be done?');
    })

    it('should have footer text help', function () {
        expect(
        element(by.css('.info')).getText()
        ).toContain('Double-click to edit a todo');
    });

});