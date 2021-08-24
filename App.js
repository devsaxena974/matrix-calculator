import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MatrixDimensions from './components/MatrixDimensions';
import InputMatrix from './components/InputMatrix';

const Stack = createNativeStackNavigator();

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile. Number of rows is {route.params.rows} and columns is {route.params.columns}</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Matrix Dimensions" component={MatrixDimensions} options={{ title: "Matrix Dimensions" }}/>
        <Stack.Screen name="Input Matrix" component={InputMatrix} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
});
