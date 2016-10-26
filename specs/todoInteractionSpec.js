Angular2TodoPage = require('../page-objects/todo.po.js');

describe(' todos', function () {
    var todoPage = new Angular2TodoPage();  
    
    beforeEach(function() {
        todoPage.runBeforeEach();
        todoPage.allTodos().count()
        .then(function (count) {
            if ( count > 0 ) {
                for (var i=0; i<count; i++ ){
                    todoPage.destroyTodo(i);
                };
            }
        });
    });

    it('should complete a todo', function () {
        todoPage.addTodo('test todo 1');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');

        todoPage.markCompleted(0);
        expect(todoPage.completionStatus(0)).toEqual('completed');

        todoPage.destroyTodo(0);
    });
    
    it('should uncomplete a todo', function () {
        todoPage.addTodo('test todo 1');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');

        todoPage.markCompleted(0);
        expect(todoPage.completionStatus(0)).toEqual('completed');

        todoPage.markCompleted(0); // should unmark if clicked again
        expect(todoPage.completionStatus(0)).toEqual('');           
    });

    it('should complete all todos', function () {
        todoPage.addTodo('test todo 1');
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');
        expect(todoPage.getTodoText(1)).toEqual('test todo 2');
        expect(todoPage.getTodoText(2)).toEqual('test todo 3');

        todoPage.toggleAll();

        expect(todoPage.completionStatus(2)).toEqual('completed');
        expect(todoPage.completionStatus(1)).toEqual('completed');
        expect(todoPage.completionStatus(0)).toEqual('completed');

        todoPage.destroyTodo(2);
        todoPage.destroyTodo(1);
        todoPage.destroyTodo(0);

    });

    it('should clear completed todos', function () {
        todoPage.addTodo('test todo 1');
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');
        expect(todoPage.getTodoText(1)).toEqual('test todo 2');
        expect(todoPage.getTodoText(2)).toEqual('test todo 3');

        todoPage.toggleAll();

        expect(todoPage.completionStatus(2)).toEqual('completed');
        expect(todoPage.completionStatus(1)).toEqual('completed');
        expect(todoPage.completionStatus(0)).toEqual('completed');

        todoPage.clearCompleted();

        expect(todoPage.allTodos().count()).toEqual(0);

    });

    it('should uncomplete all todos', function () {
        todoPage.addTodo('test todo 1');
        todoPage.addTodo('test todo 2');
        todoPage.addTodo('test todo 3');
        expect(todoPage.getTodoText(0)).toEqual('test todo 1');
        expect(todoPage.getTodoText(1)).toEqual('test todo 2');
        expect(todoPage.getTodoText(2)).toEqual('test todo 3');

        todoPage.toggleAll();

        expect(todoPage.completionStatus(2)).toEqual('completed');
        expect(todoPage.completionStatus(1)).toEqual('completed');
        expect(todoPage.completionStatus(0)).toEqual('completed');

        todoPage.toggleAll();

        expect(todoPage.completionStatus(2)).toEqual('');
        expect(todoPage.completionStatus(1)).toEqual('');
        expect(todoPage.completionStatus(0)).toEqual('');        

        todoPage.destroyTodo(2);
        todoPage.destroyTodo(1);
        todoPage.destroyTodo(0);        
    });
    
    xit('should uncomplete all todos, mixed state', function () {
    
    });
});
