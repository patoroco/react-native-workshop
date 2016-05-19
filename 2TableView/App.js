import React from 'react';
import {
  Navigator,
  Text,
} from 'react-native';

import ListOfCities from './ListOfCities'
import CityDetail from './CityDetail'

export default React.createClass({

  // https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/Navigator/NavigationBarSample.js

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{name: 'cities'}}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        renderScene={this._routeMapper}
        navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouter} />}
      />
    )
  },

  _routeMapper(route, navigator) {
    _navigator = navigator

    if (route.name === 'cities') {
      return <ListOfCities navigator={_navigator} />
    } else if (route.name === 'detail') {
      return <CityDetail navigator={_navigator} cityName={route.cityName} />
    }

    return null
  }
})


const NavigationBarRouter = {
  LeftButton: function(route, navigator, index, navState) {
    if (route.name === 'detail') {
      return (
        <Text>
          Back
        </Text>
      )
    }

    return null
  },

  RightButton: function(route, navigator, index, navState) {
  },

  Title: function(route, navigator, index, navState) {
    if (route.name === 'detail') {
      return (
        <Text>
          {route.cityName}
        </Text>
      )
    }

    return null
  }
}
