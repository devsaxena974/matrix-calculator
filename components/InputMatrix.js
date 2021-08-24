import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const InputMatrix = ({ navigation, route }) => {
    const rows = parseInt(route.params.rows, 10)
    const cols = parseInt(route.params.columns, 10)

    //Setting up the matrix where all the numbers will go
    var matrix = new Array(rows)

    for(let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(cols)
    }


    for(let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[0].length; k++) {
            matrix[j][k] = 0
        }
    }


    // Setting up the matrix with all the inputs
    var inputMatrix = new Array(rows)

    for(let i = 0; i < inputMatrix.length; i++) {
        inputMatrix[i] = new Array(cols)
    }


    for(let j = 0; j < inputMatrix.length; j++) {
        for (let k = 0; k < inputMatrix[0].length; k++) {
            inputMatrix[j][k] = <TextInput style={{fontSize: 30, backgroundColor: '#ededed', height: 60, borderColor: "#000000", borderWidth: 1, padding: 10, marginEnd: 5, marginBottom: 5}} 
                keyboardType='numeric' 
                placeholder={"R" + j.toString() + " C" + k.toString()} 
                key={j.toString() +k.toString()} 
                onChangeText={e => updateMatrix(j, k, parseInt(e), matrix)} 
            />
        }
    }

    //Helper function to update matrix
    const updateMatrix = (row, column, value, matrix) => {
        console.log(row)
        console.log(column)
        console.log(value)
        matrix[row][column] = value
        console.log(matrix)
    }



    return (
        <ScrollView style={{ height:60 }}>
            <Text>{rows} rows and {cols} columns</Text>
            {inputMatrix.map((items, index) => {
                return (
                    <View style={styles.rowContainer} key={index}>
                    {items.map((subItems, sIndex) => {
                        return inputMatrix[index][sIndex]
                    })}
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    rowContainer: {
        flexDirection: "row"
    },
  });

export default InputMatrix
