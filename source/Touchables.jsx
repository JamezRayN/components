import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const App = () => {
  return (
    <View>
      
      <TouchableHighlight
        onPress={() => console.log('TouchableHighlight Pressed')}
        underlayColor="lightgray">

          <Text>TouchableHighlight</Text>
          
      </TouchableHighlight>

      <TouchableOpacity onPress={() => console.log('TouchableOpacity Pressed')}>
        <View>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => console.log('TouchableWithoutFeedback Pressed')}>
        <View>
          <Text>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    
  );
};


export default App;
