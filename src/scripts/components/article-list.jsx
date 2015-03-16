// : Production List
require('whatwg-fetch/fetch');
var React           = require("react");
var InfiniteScroll  = require('react-infinite-scroll')(React);

var ArticleListItem = React.createClass({
  propTypes:{
    article    : React.PropTypes.object
  },
  
  render: function() {
    return (
      <li className="list_item">
        <a href={this.props.articles.link}>
          <ArticleThumbs production={this.props.article} />
        </a>
      </li>
    );
  }
});


var ProductionList = React.createClass({
  propTypes:{
    is_infinite   : React.PropTypes.bool,
    page_start    : React.PropTypes.number
  },
  getInitialProps: function() {
    return {
      is_infinite   : false,
      page_start    : 0
    };
  },
  getInitialState: function() {
    return {
      has_more  : true,
      items     : [],
      url       : "http://qiita.com/api/v2/items?page=1&per_page=20" 
    };
  },
  componentWillMount: function() {
    this.fetch();
  },
  
  fetch: function() {
    // use fetch polyfill
    var _this = this;
    fetch(this.state.url)
      .then(function(response) {
        return response.json();
      }).then(function(items) {
        console.log(["fetch:body", items, _this]);
        items.map(function(i){
          var item = _this.createItem(i);
          //_this.state.items.concat([item]);
          //console.log(["concat",_this.state.items]);
          return _this.state.items.concat([item]);
        });
        console.log(items);
      });
  },
  
  createItem : function(i){
    return (
      <ArticleListItem key={i.id} article={i} />
    );
  },
  
  loadMore: function (page) {
    this.fetch();
  },
  
  render: function() {
    console.log([this.state]);
    return (
      <div className="Component__articles">
        <ul className="articles_list">
          <InfiniteScroll loadMore={this.loadMore} hasMore={this.state.has_more}>
            {this.state.items}
          </InfiniteScroll>
        </ul>
      </div>
    );
  }
});

module.exports = ProductionList;