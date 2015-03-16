// : for Root Header

// Requires
var React   = require('react');
var Link    = require('../react-route-link.js');

var NotFound = React.createClass({
  
  render: function() {
    
    return (
      <header className="layout_header">
        Headerだよ
      </header>
    );
    
  }
});


module.exports = NotFound;