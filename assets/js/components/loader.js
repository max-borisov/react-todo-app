var React = require('react');

var LoadIndicator = React.createClass({

  render: function() {

    return (
      <div className="text-center"><img src="./assets/images/rolling.gif" /></div>
    );
  }
});

module.exports = LoadIndicator;