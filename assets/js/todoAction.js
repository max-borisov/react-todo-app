var TodoAction = {
  deleteProject: function(project) {
    TodoStore.deleteProject(project);
  },

  deleteTask: function(task) {
    TodoStore.deleteTask(task);
  }
};

export default TodoAction;
