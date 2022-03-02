import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export const Button = ({onPress}) => {
  return (
        <TouchableOpacity 
           onPress={onPress}
            style={styles.button} 
            activeOpacity={.7}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius:7,
        alignItems:  'center',
        marginTop:30
    },
    buttonText:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});