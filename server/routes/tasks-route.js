// tasks.js
var router = require('express').Router();
var Task = require('../models/task-model');

// get all tasks
router.get('/', function(req, res) {
  console.log('hit my get all tasks route');

  // db query
  Task.find({}, function(err, result){
    if(err){
      console.log('We got an error:', err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

// create a new task in the db
router.post('/', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var taskObject = req.body;

  var addedTask = new Task({
    name: taskObject.taskName
  });

  // db query
  addedTask.save(function(err, result){
    if(err) {
      console.log('There was an error adding new task:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

// create a new task in the db
router.delete('/:id', function(req, res) {
  var taskToDeleteId = req.params.id;
  console.log('hit delete route');
  console.log('here is the id to delete ->', taskToDeleteId);

  // db query
  Task.findByIdAndRemove(
    {_id: taskToDeleteId},
    function(err, result) {
      if(err) {
        console.log('Error completing task:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});




// create a new task in the db
router.put('/complete/:id', function(req, res) {
  var taskToCompleteId = req.params.id;
  console.log('hit complete route');
  console.log('here is the id to complete ->', taskToCompleteId);

  // db query
  Task.findByIdAndUpdate(
    {_id: taskToCompleteId},
    {
      $set: {status: true}
    },
    function(err, result) {
      if(err) {
        console.log('Error completing task:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.put('/:id', function(req, res) {
  var taskToUpdateId = req.params.id;
  var taskObject = req.body;
  console.log('hit complete route');
  console.log('here is the id to complete ->', taskToUpdateId);

  // db query
  Task.findByIdAndUpdate(
    {_id: taskToUpdateId},
    {
      $set: {description: taskObject.description}
    },
    function(err, result) {
      if(err) {
        console.log('Error completing task:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});


// create a new task in the db
router.put('/uncomplete/:id', function(req, res) {
  var taskToUncompleteId = req.params.id;
  console.log('hit complete route');
  console.log('here is the id to complete ->', taskToUncompleteId);

  // db query
  Task.findByIdAndUpdate(
    {_id: taskToUncompleteId},
    {
      $set: {status: false}
    },
    function(err, result) {
      if(err) {
        console.log('Error completing task:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// create a new task in the db
router.put('/:id', function(req, res) {
  var taskToUpdateId = req.params.id;
  var taskObject = req.body;
  console.log('hit complete route');
  console.log('here is the id to complete ->', taskToUpdateId);

  // db query
  Task.findByIdAndUpdate(
    {_id: taskToUpdateId},
    {
      $set: {name: taskObject.name}
    },
    function(err, result) {
      if(err) {
        console.log('Error completing task:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
