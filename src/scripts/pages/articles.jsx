// : for Article List(Index) Page

// Requires
var React   = require('react');
var Link    = require('../react-route-link.js');


// Components
var RootHeader     = require('../components/root-header.jsx');
var ArticleList    = require('../components/article-list.jsx');
var About          = require('../components/about.jsx');
var Modal          = require('../components/modal.jsx');

var Articles = React.createClass({
  render: function() {
    return (
      <div className="layout_content page_articles">
        <RootHeader />
        <main className="layout_main">
          <section className="layout_card Productions Summary">
            <ArticleList />
          </section>
        </main>
        <Modal>
          <About />
        </Modal>
      </div>
    );
    
  }
});


module.exports = Articles;