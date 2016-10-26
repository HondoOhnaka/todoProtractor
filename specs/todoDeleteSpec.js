Angular2TodoPage = require('../page-objects/todo.po.js');

describe('deleting todos', function () {
    var todoPage = new Angular2TodoPage();    

    beforeEach(function() {
        todoPage.runBeforeEach();
        todoPage.typeText('test todo 1');
    });

    it('should delete a single todo', function () {

    });

    it('should delete multiple todos', function () {

    });

    it('should delete all todos', function () {

    });

    it('should decrement how many left', function () {

    });
}); //create
