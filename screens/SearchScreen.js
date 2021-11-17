import React from 'react';
import { Text, View } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ backgroundColor: "cyan",flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search for books!</Text>
        </View>
      );
    }
  }