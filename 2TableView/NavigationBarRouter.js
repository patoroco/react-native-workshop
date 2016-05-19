import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

export default {

  LeftButton: function(route, navigator, index, navState) {
    if (route.name === 'detail') {
      return (
        <TouchableHighlight
          onPress={() => navigator.pop()}
          style={styles.leftButton}
        >
          <Text
            style={styles.leftButtonText}
          >
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
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    )
  }
}


const styles = StyleSheet.create({
  leftButton: {
    padding: 10,
  },

  leftButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
})
