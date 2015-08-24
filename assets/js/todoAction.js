var TodoStore = require('./todoStore');

var TodoAction = {
  deleteProject: function(project) {
    TodoStore.deleteProject(project);
  },

  deleteTask: function(project, task) {
    TodoStore.deleteTask(project, task);
  },

  createTask: function(project, taskInput) {
    TodoStore.createTask(project, taskInput);
  },

  completeTask: function(project, task, complete) {
    TodoStore.completeTask(project, task, complete);
  },

  editTask: function(project, task, description) {
    TodoStore.editTask(project, task, description);
  },

  createProject: function() {
    TodoStore.createProject();
  },

  editProject: function(project, title) {
    TodoStore.editProject(project, title);
  }
};

export default TodoAction;