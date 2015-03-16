//: Route

// Require
var React           = require('react');
var Router          = require('react-router');
var DefaultRoute    = Router.DefaultRoute;
var NotFoundRoute   = Router.NotFoundRoute;
var Link            = Router.Link;
var Route           = Router.Route;
var RouteHandler    = Router.RouteHandler;
var KZ              = require("kizuna");  // 2way binding mixin

// Confing
var appView = document.getElementById("app-view");
var usePushState = false; //use PushState=> true

// Store
var Stores = [
  {is_view_setting: "isViewSetting"}
];


// App View - Binding PageComponents
var App = React.createClass({
  mixins: [KZ.Mixin],
  getInitialState: function() {
    return {
      is_view_setting : false
    };
  },
  render: function () {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});


// Router
var Pages = {
  root              : "/",
  articles          : require("./pages/articles.jsx"),
  article           : require("./pages/article.jsx"),
  not_found         : require("./pages/not-found.jsx")
};

var Routes = (
  <Route path={Pages.root} handler={App}>
//    <Route name="article" path="/:cid" handler={Pages.article} />
//    <NotFoundRoute handler={Pages.not_found} />
    <DefaultRoute handler={Pages.articles} />
  </Route>
);

// run
Router.run(Routes, usePushState? Router.HistoryLocation : null, function (Handler) {
  React.render(<Handler binding={{Stores}} />, appView);
});