import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export const SkillCard = ({skill}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
        <Text style={styles.textSkill}>
            {skill}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center', 
        marginVertical: 10
    },
    textSkill:{
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
});