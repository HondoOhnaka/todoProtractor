var Angular2TodoPage = function (){

  this.todoInput = element(by.css('input.new-todo'));
  this.returnKey = protractor.Key.RETURN;
  this.todoCount = element(by.css('span.todo-count strong'));

  this.runBeforeEach = function () {
      browser.get('http://todomvc.com/examples/angular2/');
  }
  // workaround for this issue https://github.com/angular/protractor/issues/3196
  this.addTodo = function (text){
    browser.sleep(1000);
    for(i = 0; i < text.length; i++){
      this.todoInput.sendKeys(text.charAt(i));
    }
      this.todoInput.sendKeys(this.returnKey);
  }

  this.todoElementAt = function (num){
      return element.all(by.css('ul.todo-list li')).get(num);
  }

  this.getTodoText = function (num){
      return element.all(by.css('ul.todo-list label')).get(num).getText();
  }
  
  this.allTodos = function () {
      return element.all(by.css('ul.todo-list li'));
  }

  this.markCompleted = function (num) {
      element.all(by.css('ul.todo-list li input.toggle')).get(num).click();
  }

  this.toggleAll = function () {
      element.all(by.css('input.toggle-all')).click();
  }

  this.markAllCompleted = function () {
    this.allTodos().count()
        .then(function (count) {
            if ( count > 0 ) {
                for (var i=0; i<=count; i++ ){
                    this.markCompleted(i);
                };
        }});
}

  this.completionStatus = function (num) {
      return element.all(by.css('ul.todo-list li')).get(num).getAttribute('class');
  }
  

  this.destroyTodo = function (num) {
    var elm = element.all(by.css('ul.todo-list li button.destroy')).get(num);
    browser.executeScript("arguments[0].click();", elm.getWebElement());
    browser.sleep(1000);
  }

/* 
NOT WORKING TODO FIX
this.destroyAllTodos = function () {
    this.allTodos().count()
        .then(function (count) {
            if ( count > 0 ) {
                for (var i=0; i<=count; i++ ){
                    this.destroyTodo(i);
                };
        }});
}
*/

  this.clearCompleted = function () {
      element(by.css('button.clear-completed')).click();
  }  


  this.makeEditable = function (num) {
      browser.actions().doubleClick(element.all(by.css('ul.todo-list li')).get(num)).perform();
  }

    this.updateTodo = function (num, text) {
        browser.actions().doubleClick(element.all(by.css('ul.todo-list li')).get(num)).perform();
        element.all(by.css('ul.todo-list li label')).get(num).click();
        element.all(by.css('ul.todo-list li')).get(num).sendKeys(text, this.returnKey);
  }
}
module.exports = Angular2TodoPage;