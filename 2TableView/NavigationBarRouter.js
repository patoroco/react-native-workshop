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
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text>Back</Text>
        </TouchableHighlight>
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
