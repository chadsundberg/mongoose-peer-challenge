// task.controller.js
myApp.controller('TaskController', ['TaskFactory', function(TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = TaskFactory.allTasks;
  TaskFactory.getTasks();   // This one is here to load all data when controller is started

  self.addTask = function() {
    TaskFactory.addTask(self.newTask);
  }

  self.deleteTask = function(taskId) {
    TaskFactory.deleteTask(taskId);
  }

  self.completeTask = function(taskId) {
    TaskFactory.completeTask(taskId);
  }

  self.uncompleteTask = function(taskId) {
    TaskFactory.uncompleteTask(taskId);
  }

  self.updateTask = function(task) {
    TaskFactory.updateTask(task);
  }

  self.updateTaskDescription = function(task) {
    TaskFactory.updateTaskDescription(task);
  }

}]);
