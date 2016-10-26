Angular2TodoPage = require('../page-objects/todo.po.js');

describe('deleting todos', function () {
    var todoPage = new Angular2TodoPage();    

    beforeEach(function() {
        todoPage.runBeforeEach();
        //todoPage.destroyAllTodos(); // not working
    });

    it('should delete an uncompleted todo', function () {
        // add todo and verify
        todoPage.addTodo('test todo 1');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');
        
        todoPage.destroyTodo(0);
        expect(todoPage.todoElementAt(0).isPresent()).toBe(false);
    });

    it('should delete a single completed todo', function () {
        // add todo and verify
        todoPage.addTodo('test todo 1');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');

        todoPage.markCompleted(0);
        expect(todoPage.completionStatus(0)).toEqual('completed');
        
        todoPage.destroyTodo(0);
        expect(todoPage.todoElementAt(0).isPresent()).toBe(false);
    });

    it('should delete multiple todos', function () {

        todoPage.addTodo('test todo 1');
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');
        expect(todoPage.getTodoText(1)).toEqual('test todo 2');
        expect(todoPage.getTodoText(2)).toEqual('test todo 3');
        
        todoPage.destroyTodo(2);
        expect(todoPage.todoElementAt(2).isPresent()).toBe(false);
        
        todoPage.destroyTodo(1);
        expect(todoPage.todoElementAt(1).isPresent()).toBe(false);

        todoPage.destroyTodo(0);
        expect(todoPage.todoElementAt(0).isPresent()).toBe(false);

    });

    it('should delete all todos', function () {
        todoPage.addTodo('test todo 1');
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');
                
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');
        expect(todoPage.getTodoText(1)).toEqual('test todo 2');
        expect(todoPage.getTodoText(2)).toEqual('test todo 3');
        
        todoPage.markCompleted(0);
        todoPage.markCompleted(1);
        todoPage.markCompleted(2);

        todoPage.clearCompleted();
        browser.sleep(3000);

        expect(todoPage.allTodos().count()).toBe(0);
    });

    it('should decrement how many left', function () {
        todoPage.addTodo('test todo 1');
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');
        expect(todoPage.todoCount.getText()).toEqual('3');
    });
});
