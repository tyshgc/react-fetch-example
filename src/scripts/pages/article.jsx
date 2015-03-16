// : for Article(Detail) Page

// Requires
var React   = require('react');
var Link    = require('../react-route-link.js');


// Components
var RootHeader        = require('../components/root-header.jsx');

var Article = React.createClass({
  
  render: function() {
    
    return (
      <div className="layout_content page_article">
        <RootHeader />
        <main className="layout_main">
          [Articleだよ]
        </main>
      </div>
    );
    
  }
});


module.exports = Article;