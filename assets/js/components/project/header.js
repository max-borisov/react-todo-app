var React = require('react');
var TodoAction = require('../../todoAction');

var ProjectHeader = React.createClass({

  getProject: function() {
    return this.props.project;
  },

  onDeleteProject: function(event) {
    event.preventDefault();

    if (confirm('Are you sure ?')) {
      TodoAction.deleteProject(this.getProject());
    }
  },

  render: function() {

    var project = this.getProject();

    return (
      <div className='todo-header'>
        <h3>{project.title}</h3>
        <ul>
          <li>
            <a className='todo-action-edit' href='#' title='Edit'>Edit</a>
          </li>
          <li>
            <a className='todo-action-remove' href='#' title='Delete' onClick={this.onDeleteProject}>Delete</a>
          </li>
        </ul>
        <input name='' type='text' />
      </div>
    );
  }
});

module.exports = ProjectHeader;
