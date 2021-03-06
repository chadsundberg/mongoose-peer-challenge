// task.factory.js
myApp.factory('TaskFactory', ['$http', function($http) {

  var factoryTasks = { list: [] };

  // getTasks(); // This one was here to load all data when factory was started

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryTasks.list = response.data;
    });
  }

  function addTask(someNewTask) {
    $http({
      method: 'POST',
      url: '/tasks',
      data: someNewTask
    }).then(function(response){
      console.log(response);
      getTasks();
    });
  }

  function deleteTask(taskId){
    $http({
      method: 'DELETE',
      url: '/tasks/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }

  function completeTask(taskId) {
    console.log('The taskId being sent back is:',taskId);
    $http({
      method: 'PUT',
      url: '/tasks/complete/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }

  function uncompleteTask(taskId){
    $http({
      method: 'PUT',
      url: '/tasks/uncomplete/' + taskId
    }).then(function(response) {
      getTasks();
    });
  }

  function updateTask(task) {
    $http({
      method: 'PUT',
      url: '/tasks/' + task._id,
      data: task
    }).then(function(response) {
      getTasks();
    })
  }

  // this is the public API, if it's not in here, your controller won't see it
  return {
    updateTaskDescription: updateTask,
    allTasks: factoryTasks,
    getTasks: getTasks,
    addTask: addTask,
    deleteTask: deleteTask,
    completeTask: completeTask,
    uncompleteTask: uncompleteTask,
    updateTask: updateTask
  };
}]);
