import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkyllCard';


export  function Home(){

    const [newSkil, setNewSkil] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill(){
        setMySkills(oldState =>[...oldState, newSkil]);
        setNewSkil('')
    }

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
              Welcome Mauro
          </Text>
          <TextInput 
                style={styles.input} 
                placeholder="New Skil" 
                placeholderTextColor="#555"
                onChangeText={setNewSkil}
            />
          <Button onPress={handleAddNewSkill}/>
          <Text style={[styles.title, {marginVertical:50}]}>
              My Skills
          </Text>

        {
            mySkills.map(skill => (
                <SkillCard skill={skill}/>
            ))
        }
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
    }
});