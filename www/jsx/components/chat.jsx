import React from 'react';
import Ons from 'react-onsenui';

var ChatPage = React.createClass({
  render: function(){
    return (
      <div className="chat_page">
        <ChatList />
        <TextField />
      </div>
    );
  }
});

var TextField = React.createClass({
  getInitialState: function(){
    return {default_text: ""};
  },

  textHandler: function(event){
    var default_text = event.target.value;
    this.setState({default_text: default_text});
    this.props.textHandler(default_text);
  },

  render: function(){
    return (
      <div className="bar bar-standerd bar-secondary">
        <Ons.Input value={this.state.symbol} onChange={this.textHandler}/>
      </div>
    )
  }
});

module.exports = ChatPage;