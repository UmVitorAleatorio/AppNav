import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
	
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
		  
		  <TouchableOpacity
		  	 onPress={() => navigation.navigate('Sobre')}
			  >
			  <text>Sobre</text>
		  </TouchableOpacity>
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
