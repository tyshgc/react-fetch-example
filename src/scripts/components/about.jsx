// : for About Contents

// Requires
var React   = require('react');
var Link    = require('../react-route-link.js');

var About = React.createClass({
  
  render: function() {
    
    return (
      <div className="layout_content page_not-found">
        <RootHeader />
        <main className="layout_main">
          [Aboutだよ]
        </main>
      </div>
    );
    
  }
});


module.exports = About;