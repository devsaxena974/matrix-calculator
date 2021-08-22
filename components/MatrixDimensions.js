import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MatrixDimensions = ({ navigation }) => {

    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Input Matrix Dimensions Below</Text>
            <Text>Rows:</Text>
            <TextInput keyboardType='numeric' value={numRows} onChangeText={(text) => setNumRows(text)}></TextInput>
            <Text>Columns:</Text>
            <TextInput keyboardType='numeric' value={numCols} onChangeText={(text) => setNumCols(text)}></TextInput>
            <Button defaultValue={0} title="Submit" onPress={() => navigation.navigate('Profile', { name: 'Jane', rows: numRows, columns: numCols })} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });

export default MatrixDimensions
