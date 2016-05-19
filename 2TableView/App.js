import React from 'react'
import {
  Navigator,
  Platform,
  StyleSheet,
  ToolbarAndroid,
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
        navigationBar={Platform.OS === 'ios' ? <Navigator.NavigationBar routeMapper={NavigationBarRouter} style={styles.navigationBar} /> : null}
      />
    )
  },

  _getToolbar(navigator, showBackIcon, title) {
    if (Platform.OS === 'ios') {
      return null
    }

    return (
      <ToolbarAndroid
        title={title}
        navIcon={showBackIcon ? require('./imgs/back_android.png') : null}
        onIconClicked={() => navigator.pop()}
        titleColor='white'
        style={styles.toolbarAndroid}/>
    )
  },

  _routeMapper(route, navigator) {
    _navigator = navigator

    let defaultProps = {navigator: _navigator}
    if (route.name === 'cities') {
      return <ListOfCities {...defaultProps} toolbar={this._getToolbar(navigator, false, 'Cities')} />
    } else if (route.name === 'detail') {
      return <CityDetail {...defaultProps} wikiURL={route.wikiURL} toolbar={this._getToolbar(navigator, true, route.cityName)}/>
    }

    return null
  }
})


const styles = StyleSheet.create({

  navigationBar: {
    backgroundColor: '#FABADA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  toolbarAndroid: {
    backgroundColor: '#FABADA',
    height: 56,
  }

})
