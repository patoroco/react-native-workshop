import React from 'react';
import {
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


const cities = [
  "Aguilar de Campoó",
  "Santander",
  "Valladolid",
  "Madrid",
]


export default React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return {
      dataSource: ds.cloneWithRows(cities),
    };
  },

  _renderRow(rowData) {
    return (
      <TouchableHighlight onPress={() => this.props.navigator.push({name: 'detail'})}>
        {this._rowBody(rowData)}
      </TouchableHighlight>
    )
  },

  _rowBody(rowData) {
    return (
      <View
        style={{ backgroundColor: 'white', height: 50, flexDirection: 'row', alignItems: 'center'}}
      >
        <Image
          source={require('./imgs/picniccode.jpg')}
          style={{width: 30, height: 30, marginHorizontal: 10}}
        />

        <Text style={{flex: 1}}>
          {rowData}
        </Text>
      </View>
    )
  },

  render() {
    return (
      <ListView
        style={{ flex: 1, backgroundColor: 'gray', paddingTop: 20 }}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    )
  },
})
