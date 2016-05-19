import React from 'react';
import {
  Navigator,
} from 'react-native';

import ListOfCities from './ListOfCities'
import CityDetail from './CityDetail'

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
    _navigator = navigator

    if (route.name === 'cities') {
      return <ListOfCities navigator={_navigator} />
    } else if (route.name === 'detail') {
      return <CityDetail navigator={_navigator} />
    }

    return null
  }
})
