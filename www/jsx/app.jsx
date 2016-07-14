import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import ons from 'onsenUI';
import Ons from 'react-onsenui';

/*
import {HomePage} from 'components/home.jsx';
import {RoomPage} from 'components/room.jsx';
import {ChatPage} from 'components/chat.jsx';
import {LovePage} from 'components/love.jsx';
import {Header} from 'components/header.jsx';
*/
const HomePage = require('./components/home.jsx');
const RoomPage = require('./components/room.jsx');
const ChatPage = require('./components/chat.jsx');
const LovePage = require('./components/love.jsx');


const App = React.createClass({

  renderToolbar: function() {
    return (
      <Ons.Toolbar>
        <div className="left">
          <Ons.ToolbarButton>
            <Ons.Icon icon='ion-navicon, material: md-menu' />
          </Ons.ToolbarButton>
        </div>
        <div className="center">
          <p>
            title
          </p>
        </div>  
      </Ons.Toolbar>
    );
  },

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <div className="page">
          {this.props.children}
        </div>
      </Ons.Page>
    );
  }
});

const routes = (
  <Route path="*" component={App}>
    <IndexRoute component={HomePage}/>
    <Route component={HomePage}/>
    <Route component={RoomPage}/>
    <Route component={ChatPage}/>
    <Route component={LovePage}/>
  </Route>
);

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ), document.getElementById('app')
);