// : for NotFound Page

// Requires
var React   = require('react');
var Link    = require('../react-route-link.js');


// Components
var RootHeader        = require('../components/root-header.jsx');

var NotFound = React.createClass({
  
  render: function() {
    
    return (
      <div className="layout_content page_not-found">
        <RootHeader />
        <main className="layout_main">
          [NotFoundだよ]
        </main>
      </div>
    );
    
  }
});


module.exports = NotFound;