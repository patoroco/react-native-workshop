import React from 'react'
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

export default {
  LeftButton: function(route, navigator, index, navState) {
    if (route.name === 'detail') {
      return (
        <TouchableHighlight onPress={() => navigator.pop()} style={{ padding: 10}}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            Back
          </Text>
        </TouchableHighlight>
      )
    }

    return null
  },

  RightButton: function(route, navigator, index, navState) {
    return null
  },

  Title: function(route, navigator, index, navState) {
    let title = null
    if (route.name === 'detail') {
      title = route.cityName
    } else if (route.name === 'cities') {
      title = "Cities"
    }

    return (
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
        {title}
      </Text>
    )
  }
}
