Angular2TodoPage = require('../page-objects/todo.po.js');

describe('creating todos', function () {
    var todoPage = new Angular2TodoPage();  
    
    beforeEach(function() {
        todoPage.runBeforeEach();
    });

    it('should create a todo', function () {
        todoPage.addTodo('test todo 1');

        expect(todoPage.getTodoText(0)).toEqual('test todo 1')
    });

    it('should create multiple todos', function () {
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');

        expect(todoPage.getTodoText(1)).toEqual('test todo 2')
        expect(todoPage.getTodoText(2)).toEqual('test todo 3')
    });

    it('should increment how many left', function () {
        expect(todoPage.todoCount.getText()).toEqual('3');
    });
});
