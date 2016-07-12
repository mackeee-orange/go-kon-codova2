import React from 'react';
import Ons from 'react-onsenui';

var Header = React.createClass({
  render: function() {
    return (
      <Ons.Toolbar>
        <div className="left">
          <Ons.ToolbarButton>
            <Ons.Icon icon='ion-navicon, material: md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }
});

module.exports = Header;