var React = require('react');
var ProjectHeader = require('./header');
var ProjectBar = require('./bar');
var ProjectTaskList = require('../task/list');

var Project = React.createClass({

  render: function() {

    var project = this.props.project;

    return (
      <article>
        <ProjectHeader project={project} />
        <ProjectBar project={project} />
        <ProjectTaskList project={project} tasks={project.tasks} />
      </article>
    );
  }
});

module.exports = Project;