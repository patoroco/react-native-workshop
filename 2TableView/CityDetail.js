import React from 'react'
import {
  Image,
  Text,
  WebView,
} from 'react-native'


export default React.createClass({
  getDefaultProps() {
    return {
      cityName: 'placeholder',
    }
  },

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
