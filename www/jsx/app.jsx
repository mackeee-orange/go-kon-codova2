import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
/*
import {HomePage} from 'components/home.jsx';
import {RoomPage} from 'components/room.jsx';
import {ChatPage} from 'components/chat.jsx';
import {LovePage} from 'components/love.jsx';
import {Header} from 'components/header.jsx';
*/
var HomePage = require('./components/home.jsx');
var RoomPage = require('./components/room.jsx');
var ChatPage = require('./components/chat.jsx');
var LovePage = require('./components/love.jsx');
var Header = require('./components/header.jsx');


var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route component={HomePage}/>
    <Route component={RoomPage}/>
    <Route component={ChatPage}/>
    <Route component={LovePage}/>
  </Route>
);

ReactDOM.render(<Route history={browserHistory}>{routes}</Route>, document.getElementById('app'));