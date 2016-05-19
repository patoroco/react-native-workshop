import React from 'react'
import {
  Image,
  Text,
  WebView,
} from 'react-native'


export default React.createClass({
  render() {
    return (
      <WebView
        style={{flex:1}}
        scalesPageToFit={true}
        source={{uri: this.props.wikiURL}}
      />
    )
  }
})
