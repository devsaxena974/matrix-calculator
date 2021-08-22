import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';

const MatrixDimensions = ({ navigation }) => {

    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Input Matrix Dimensions Below</Text>
            <Text>Rows:</Text>
            <TextInput onChangeText={e => setNumRows(e)}></TextInput>
            <Text>Columns:</Text>
            <TextInput onChangeText={e => setNumCols(e)}></TextInput>
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
