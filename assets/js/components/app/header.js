var React = require('react');

var AppHeader = React.createClass({

  render: function() {

    return (
      <div className='header'>
        <h1>simple todo lists</h1>
      </div>
    );
  }
});

module.exports = AppHeader;