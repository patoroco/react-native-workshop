import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'


export default React.createClass({
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
        <Text>
          {this.props.cityName}
        </Text>
      </View>
    )
  }
})
