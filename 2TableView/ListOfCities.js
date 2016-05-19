import React from 'react';
import {
  Image,
  ListView,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


import cities from './cities'


export default React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return {
      dataSource: ds.cloneWithRows(cities),
    };
  },

  _renderRow(rowData) {
    const navigationPayload = {
      name: 'detail',
      'cityName': rowData.cityName,
      'wikiURL': rowData.wikiURL,
    }

    return (
      <TouchableHighlight onPress={() => this.props.navigator.push(navigationPayload)}>
        {this._rowBody(rowData.cityName)}
      </TouchableHighlight>
    )
  },

  _rowBody(rowData) {
    return (
      <View
        style={styles.row}
      >
        <Image
          source={require('./imgs/picniccode.jpg')}
          style={styles.image}
        />

        <Text style={{flex: 1}}>
          {rowData}
        </Text>
      </View>
    )
  },

  render() {
    return (
      <View style={{flex: 1}}>
      {this.props.toolbar}
      <ListView
        style={styles.tableView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
      </View>
    )
  },
})



const styles = StyleSheet.create({
  tableView: {
    flex: 1,
    backgroundColor: 'gray',
    marginTop: Platform.OS === 'ios' ? 60 : 0,
  },

  row: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },

})
