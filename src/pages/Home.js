import React from 'react';
import { View, Text } from 'react-native';


export  function Home(){
    return (
        <View style={{
              flex: 1, 
              justifyContent: 'center', 
              alignItems: 'center'}}>
          <Text>React Native 2</Text>
          <Text >
              Ignite
          </Text>
        </View>
      );
}