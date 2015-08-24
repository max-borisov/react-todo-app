var React = require('react');
var Task = require('./task');

var TaskList = React.createClass({

  render: function() {
    var project = this.props.project;

    var tasks = this.props.tasks.map(function(task) {
      return <Task project={project} task={task} key={task.id} />
    });

    return (
      <div className='todo-list'>
        <table>
          <tbody>
            {tasks}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TaskList;