/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import APIClient from './APIClient'

const Sound = require('react-native-sound');


class Buttons extends Component {
  constructor(props) {
     super(props);
     this.state = { ip: 'undefined' };
   }

  componentDidMount() {
    let client = new APIClient('https://httpbin.org')
    client.get('ip')
      .then(json => this.setState({ ip: json.origin }))
      .catch((error) => console.error(error))
      this.playSound()
  }

  playSound() {
    var applause = new Sound(
      'sounds/applause.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) { console.error('failed to load the sound', error) }
        else { applause.play() }
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.ip}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Buttons', () => Buttons);
