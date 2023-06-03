import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
	
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
		  
		  <TouchableOpacity>
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
