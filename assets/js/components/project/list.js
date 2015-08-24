var React = require('react');
var Project = require('./project');
var LoadIndicator = require('../loader');

var ProjectList = React.createClass({

  render: function() {
    var todoList = this.props.todo;
    var projects = todoList.map(function(project) {
      return <Project project={project} key={project.id} />
    });

    if (projects.length > 0) {
      return (
        <section className="list">
          {projects}
        </section>
      );
    } else {
      return (
        <LoadIndicator />
      );
    }
  }
});

module.exports = ProjectList;