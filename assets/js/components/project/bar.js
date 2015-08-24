var React = require('react');
var TodoAction = require('../../todoAction');

var ProjectBar = React.createClass({

  onCreateTask: function(event) {
    event.preventDefault();
    var project = this.props.project;
    var taskInput = React.findDOMNode(this.refs.description);
    TodoAction.createTask(project, taskInput);
  },

  render: function() {

    return (
      <div className='todo-bar'>
        <div className='todo-bar-new'>
          <form onSubmit={this.onCreateTask}>
            <input ref='description' name='' placeholder='Start typing here to create a task...' type='text'>
              <button>Add Task</button>
            </input>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ProjectBar;