var React = require('react');
var TodoAction = require('../../todoAction');

var ProjectHeader = React.createClass({

  getInitialState: function() {
    return {
      editMode: false,
      title: this.props.project.title,
    };
  },

  getProject: function() {
    return this.props.project;
  },

  onDeleteProject: function(event) {
    event.preventDefault();

    if (confirm('Are you sure ?')) {
      TodoAction.deleteProject(this.getProject());
    }
  },

  onEditProject: function(event) {
    event.preventDefault();
    this.setState({ editMode: !this.state.editMode }, function() {
      if (this.state.editMode === true) {
        React.findDOMNode(this.refs.input).focus();
      }
    });
  },

  onEditTitle: function(event) {
    if (event.keyCode === 13) {
      this.setState({
        editMode: false,
        title: event.target.value,
      }, function() {
        var project = this.getProject();
        var title = this.state.title;
        TodoAction.editProject(project, title);
      });
    }
  },

  render: function() {
    var project = this.getProject();
    var editModeClass = this.state.editMode ? ' edit-mode' : '';
    return (
      <div className={'todo-header' + editModeClass}>
        <h3>{this.state.title}</h3>
        <ul>
          <li>
            <a className='todo-action-edit' href='#' title='Edit' onClick={this.onEditProject}>Edit</a>
          </li>
          <li>
            <a className='todo-action-remove' href='#' title='Delete' onClick={this.onDeleteProject}>Delete</a>
          </li>
        </ul>
        <input ref='input' name='' type='text' defaultValue={this.state.title} onKeyDown={this.onEditTitle} />
      </div>
    );
  }
});

module.exports = ProjectHeader;