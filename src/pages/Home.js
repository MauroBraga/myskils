import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';


export  function Home(){
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
              Welcome Mauro
          </Text>
          <TextInput style={styles.input} placeholder="New Skil" placeholderTextColor="#555"/>
          <TouchableOpacity style={styles.button} activeOpacity={.7}>
              <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <Text style={[styles.title, {marginTop:20}]}>
              My Skils
          </Text>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:'#121015',
        paddingHorizontal: 30,
        paddingVertical:70
    }, 
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor:'#1f1e25',
        color: '#fff',
        fontSize:18,
        padding: Platform.OS ==='ios'?15:10,
        marginTop:30,
        borderRadius:7
    },
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