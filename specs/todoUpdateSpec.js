Angular2TodoPage = require('../page-objects/todo.po.js');

describe('update todos', function () {
    var todoPage = new Angular2TodoPage();    

    beforeEach(function() {
        todoPage.runBeforeEach();
    });

    it('should be editable on double click', function () {
        todoPage.addTodo('test todo 1');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');

        todoPage.makeEditable(0);
        browser.sleep(5000);
        expect(todoPage.todoElementAt(0).getAttribute('class')).toBe('editing')

    });

    xit('should update todo', function () {
        todoPage.makeEditable(0);
        todoPage.updateTodo(0,'this is an update');
        browser.sleep(5000);
        
    });

});