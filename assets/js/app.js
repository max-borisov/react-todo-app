var React = require('react');
var AppHeader = require('./components/app/header');
var AppContent = require('./components/app/content');
var TodoStore = require('./todoStore');

var TodoApp = React.createClass({

  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    return TodoStore.getState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this.onChange)
  },

  onChange: function() {
    this.setState(this.getStateFromStore());
  },

  render: function() {

    return (
      <div className='main'>
        <AppHeader />
        <AppContent todo={this.state.todo} />
      </div>
    );
  }
});

React.render(<TodoApp />, document.body);
