import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './App'

const TableView = React.createClass({
  render: function() {
    return (
      <App />
    )
  },
})

AppRegistry.registerComponent('TableView', () => TableView)
