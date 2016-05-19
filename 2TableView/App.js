import React from 'react';
import {
  Navigator,
} from 'react-native';

import ListOfCities from './ListOfCities'

export default React.createClass({
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{name: 'cities'}}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        renderScene={this._routeMapper}
      />
    )
  },

  _routeMapper(route, navigator) {
    if (route.name === 'cities') {
      return <ListOfCities />
    }

    return null
  }
})
