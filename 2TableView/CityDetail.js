import React from 'react'
import {
  Image,
  Text,
  View,
  WebView,
} from 'react-native'


export default React.createClass({
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.toolbar}
        <WebView
          style={{flex:1}}
          scalesPageToFit={true}
          source={{uri: this.props.wikiURL}}
        />
      </View>
    )
  }
})
