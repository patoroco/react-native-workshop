import React from 'react'
import {
  Navigator,
} from 'react-native'

import ListOfCities from './ListOfCities'
import CityDetail from './CityDetail'
import NavigationBarRouter from './NavigationBarRouter'

export default React.createClass({

  // https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/Navigator/NavigationBarSample.js

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{name: 'cities'}}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        renderScene={this._routeMapper}
        navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouter} style={{backgroundColor: '#FABADA', alignItems: 'center', justifyContent: 'center'}} />}
      />
    )
  },

  _routeMapper(route, navigator) {
    _navigator = navigator

    if (route.name === 'cities') {
      return <ListOfCities navigator={_navigator} />
    } else if (route.name === 'detail') {
      return <CityDetail navigator={_navigator} wikiURL={route.wikiURL}/>
    }

    return null
  }
})
