import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

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
const Header = require('./components/header.jsx');


export default class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route component={HomePage}/>
    <Route component={RoomPage}/>
    <Route component={ChatPage}/>
    <Route component={LovePage}/>
  </Route>
);

render(
  (<Route history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route component={HomePage}/>
      <Route component={RoomPage}/>
      <Route component={ChatPage}/>
      <Route component={LovePage}/>
    </Route>
  </Route>), 
  document.getElementById('app')
);