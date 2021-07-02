import React,{Component} from 'react';
import { StyleSheet, Text, View , SafeAreaProvider} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SpaceCrafts from './screens/SpaceCrafts';
import {StatusBar} from  'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DailyPic from './screens/DailyPic';
import StarMap from './screens/StarMap';

const Stack =  createStackNavigator()

 function App () {
  return(
 
    <NavigationContainer>

      <Stack.Navigator intialrouteName = "StarMap" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "StarMap" component = {StarMap} />
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCrafts} />
        <Stack.Screen name = "DailyPic" component = {DailyPic} />
      </Stack.Navigator>


    </NavigationContainer>
   
  );
}

export default App ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
