import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'Item 1' },
        { key: 'Item 2' },
        { key: 'Item 3' },
        
      ],
    };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Flatlist Component!</Text>
          </View>

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
