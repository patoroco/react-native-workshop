import React from 'react';
import {
  Image,
  ListView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


export default React.createClass({
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress} style={{flex: 1}}>
      <View>
        <Image
          source={require('./imgs/button.png')}
          style={{ width: 90, height: 90}}
        />
        <Text style={{ alignSelf: 'center'}}>
          {this.props.title}
        </Text>
      </View>
      </TouchableWithoutFeedback>
    )
  }
})
