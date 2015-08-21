var React = require('react');
var dispatcher = require('../../dispatcher');
var actions = require('../../actions');

var Task = React.createClass({

  getTask: function() {
    return this.props.task;
  },

  onDeleteTask: function(event) {
    event.preventDefault();

    if (confirm('Are you sure ?')) {
      dispatcher.emit(actions.DELETE_TASK, this.getTask());
      // TodoAction.deleteTask(this.getTask());
    }
  },

  render: function() {

    var task = this.getTask();
    var completed = task.completed === true ? true : false;

    return (

      <tr className='completed-task'>
        <td className='todo-list-checkbox'>
          <input defaultChecked={completed} type='checkbox' />
        </td>
        <td className='todo-list-divider'>&nbsp;</td>
        <td className='todo-list-task'>
          <p>{task.description}</p>
        </td>
        <td className='todo-list-actions'>
          <ul className='hidden'>
            <li>
              <a className='todo-list-task-edit' href='#'>Edit</a>
            </li>
            <li>
              <a className='todo-list-task-delete' href='#' onClick={this.onDeleteTask}>Delete</a>
            </li>
          </ul>
        </td>
      </tr>
    );
  }
});

module.exports = Task;
