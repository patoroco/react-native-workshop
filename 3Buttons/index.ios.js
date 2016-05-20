/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import APIClient from './APIClient'
import Button from './button'

const Sound = require('react-native-sound')
var RNFS = require('react-native-fs')


class Buttons extends Component {
  constructor(props) {
     super(props);
     this.state = { sounds: [] };
   }

  componentDidMount() {
    let client = new APIClient('https://raw.githubusercontent.com')

    client.get('patoroco/react-native-workshop/master/3Buttons/sounds.json')
      .then(json => this.setState({ sounds: json }))
      .catch(error => console.error(error))
  }

  play(soundDict) {
    console.log(soundDict)

    this.downloadFile(soundDict.url, soundDict.uniq_name)
      .then(() => this.playSound(soundDict.uniq_name))
      .catch(err => alert('error'))
  }


  downloadFile(url, filename) {
    const soundPath = RNFS.DocumentDirectoryPath + '/' + filename
    return RNFS.downloadFile(url, soundPath)
  }



  playSound(path) {
    var sound = new Sound(path, Sound.DOCUMENT,
                          (error) => {
                            if (error) { console.error('failed to load the sound', error) }
                            else { sound.play() }
                          }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.sounds.map((info) => <Button key={info.name} title={info.name} onPress={() => this.play(info)}/>)}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 20,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

AppRegistry.registerComponent('Buttons', () => Buttons);
