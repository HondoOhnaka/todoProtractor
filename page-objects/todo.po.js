var Angular2TodoPage = function (){

  this.todoInput = element(by.css('input.new-todo'));
  this.returnKey = protractor.Key.RETURN;
  this.runBeforeEach = function () {
      browser.get('http://todomvc.com/examples/angular2/');
  }
  // workaround for this issue https://github.com/angular/protractor/issues/3196
  this.typeText = function (text){
    browser.sleep(1000);
    for(i = 0; i < text.length; i++){
      this.todoInput.sendKeys(text.charAt(i));
    }
      this.todoInput.sendKeys(this.returnKey);
  }
  this.todoElementAt = function (num){
      return element.all(by.css('ul.todo-list label')).get(num);
  }
  this.allTodos = function () {
      return element.all(by.css('ul.todo-list label'));
  }

}
module.exports = Angular2TodoPage;