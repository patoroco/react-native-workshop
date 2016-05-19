import React from 'react';
import {
  ListView,
  Text,
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
      <Text>
        {rowData}
      </Text>
    )
  },

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    )
  },
})