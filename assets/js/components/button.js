var React = require('react');
var TodoAction = require('../todoAction');

var TodoButton = React.createClass({

  onCreateProject: function(event) {
    event.preventDefault();
    TodoAction.createProject();
  },

  render: function() {

    return (
      <div className='new-todo'>
        <form className="button_to" onSubmit={this.onCreateProject}>
          <input type="submit" value="Add TODO List" />
        </form>
      </div>
    );
  }
});

module.exports = TodoButton;