import React from 'react';
import {
  ListView,
  Text,
} from 'react-native';


export default React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return {
      dataSource: ds.cloneWithRows(["Aguilar de Campoó", "Santander", "Valladolid", "Madrid"]),
    };
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  },
})
