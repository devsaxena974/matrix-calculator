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
            <TextInput style={styles.input} keyboardType='numeric' onChangeText={(text) => setNumRows(text)}></TextInput>
            <Text>Columns:</Text>
            <TextInput style={styles.input} keyboardType='numeric'  onChangeText={(text) => setNumCols(text)}></TextInput>
            <Button defaultValue={0} title="Submit" onPress={() => navigation.navigate('Input Matrix', { name: 'Jane', rows: numRows, columns: numCols })} />
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
    input: {
      borderStyle: "solid",
      borderBottomColor: "#000000",
      borderWidth: 1,
      padding: 10
    }
  });

export default MatrixDimensions
