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


const sounds = [
  {"name": "badumts", "url": "https://www.myinstants.com/media/sounds/badumtss_2.mp3", "uniq_name": "badumts.mp3"},
  {"name": "tada", "url": "https://www.myinstants.com/media/sounds/win31.mp3", "uniq_name": "tada.mp3"},
  {"name": "applause", "url": "https://www.myinstants.com/media/sounds/applause-tony-d.mp3", "uniq_name": "applause.mp3"},
  {"name": "pikachu", "url": "https://www.myinstants.com/media/sounds/pickachu.mp3", "uniq_name": "pikachu.mp3"},
]


class Buttons extends Component {
  constructor(props) {
     super(props);
     this.state = { sounds: sounds };
   }

  componentDidMount() {
    let client = new APIClient('https://httpbin.org')
    // client.get('ip')
    //   .then(json => this.setState({ ip: json.origin }))
    //   .catch((error) => console.error(error))

    // this.play(this.state.sounds[1])

    // this.downloadFile()
  }

  play(soundDict) {
    console.log(soundDict)

    this.downloadFile(soundDict.url, soundDict.uniq_name)
      .then(() => this.playSound(soundDict.uniq_name))
      .catch(err => alert('error'))
  }


  downloadFile(url, filename) {
    const imagePath = RNFS.DocumentDirectoryPath + '/' + filename
    return RNFS.downloadFile(url, imagePath)
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
