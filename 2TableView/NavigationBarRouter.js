import React from 'react'
import {
  Text,
} from 'react-native'

export default {
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
