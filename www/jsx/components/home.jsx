/* global mainPage, deviceList, refreshButton */
/* global detailPage, batteryState, batteryStateButton, disconnectButton */
/* global ble  */
/* jshint browser: true , devel: true*/

import React from 'react';
import Ons from 'react-onsenui';

var Loader = React.createClass({

  render: function(){
    if(this.props.isActive){
      return (
        <center className="center">
          <p>
            周辺のデバイスを探してるのよ。
          </p>
          <p>
            <Ons.ProgressCircular indeterminate />
          </p>
        </center>
      );
    } else {
      return null;
    }
  }
});

var HomePage = React.createClass({

  getDefaultProps:function(){
    return {
      page_title: 'NeighborsList'
    };
  },

  getInitialState: function() {
    this.scan();
    return {
      loading: true,
      drawList: false,
      device_array: {}
    };
  },

  scan: function() {
    ble.scan([], 50, this.onScaned, this.onError);
  },

  onScaned: function(device) {
    console.log(JSON.stringify(device));
    /*
     var listItem = document.createElement('li'),
     html = '<b>' + device.name + '</b><br/>' +
     'RSSI: ' + device.rssi + '&nbsp;|&nbsp;' +
     device.id;

     listItem.dataset.deviceId = device.id;
     listItem.innerHTML = html;
     deviceList.appendChild(listItem);
     */

    //TODO:(test)上か下のどっちかが当たりじゃろ
    //this.setState({device_array: device});
    var device_array = [];
    for(var i = 0; i < device.length; i++){
      device_array.push(device[i]);
    }
    this.setState({
      device_array: device_array,
      loading: false,
      drawList: true
    });
  },

  onError: function(error){
    alert('Error: ' + error+"kokodayo");
  },

  getDeviceNum: function(){
    var devices = this.state.device_array;
    var data_source = [];
    for(var i = 1; i <= devices.length; i++){
      data_source.push(i);
    }
    return data_source;
  },

  renderRow: function(row, index) {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
      y = 40 + Math.round(5 * (Math.random() - 0.5));
    var devices = this.state.device_array;
    var names = [];
    for(var i = 0; i < devices.length; i++){
      names.push(devices[i].name);
    }
    var name = names[Math.floor(names.length * Math.random())];

    //TODO: nameに紐づく画像の取得
    return (
      <Ons.ListItem key={index}>
        <div className="left">
          <img src={'/img/list_item.png'} className="list_img"/>
        </div>
        <div className="center">
          {name}
        </div>
      </Ons.ListItem>
    )
  },

  render: function(){
    var onLoadDevice;
    // Deviceのscanが終わったらdrawList=trueになってListが描画される
    if(this.state.drawList){
      onLoadDevice = <Ons.List
        dataSource={this.getDeviceNum}
        renderRow={this.renderRow}
        renderHeader={() => <Ons.ListHeader>Neightbors</Ons.ListHeader>}
      />;
    }
    return (
      <div className="home_page" onLoad={this.handleLoad}>
        <Loader isActive={this.state.loading}/>
        {onLoadDevice}
      </div>
    );
  },

  handleLoad: function(){
    this.scan();
  }
});

module.exports = HomePage;