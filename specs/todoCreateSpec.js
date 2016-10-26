Angular2TodoPage = require('../page-objects/todo.po.js');

describe('creating todos', function () {
    var todoPage = new Angular2TodoPage();  
    
    beforeEach(function() {
        todoPage.runBeforeEach();
    });

    it('should create a todo', function () {
        todoPage.typeText('test todo 1');

        expect(todoPage.todoElementAt(0).getText()).toEqual('test todo 1')
    });

    it('should create multiple todos', function () {
        todoPage.typeText('test todo 2');
        todoPage.typeText('test todo 3');

        expect(todoPage.todoElementAt(1).getText()).toEqual('test todo 2')
        expect(todoPage.todoElementAt(2).getText()).toEqual('test todo 3')

    });

    it('should show how many left', function () {

    });
}); //create
