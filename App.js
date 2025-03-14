import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native' ;
const App = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    // Navigate to Home screen
    navigation.navigate('Home');
    
  };

   return (
    <View style={styles.container}>
    <Text style={styles.title}>Login From</Text> 
      <TextInput  style={styles.input}
      placeholder='Email' />
      <TextInput style={styles.input}
      placeholder='password' secureTextEntry/>
     <TouchableOpacity 
     style={styles.button}
      onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container: { 
  flex:1,
  justifyContent:'center',
  alignItems: 'center',
  backgroundColor:"green"
 },
 title:{
  fontSize:32,
  fontWeight:'bold',
  color:'#333',
 },
  input:{
 width:'80%',
    height:'50',
  borderColor:'#ccc',
  borderWidth:1,
  borderRadius:8,
  paddingHorizontal:10,
  backgroundColor:'#fff',
  marginBottom:16,
},
button: {
  width:'80%',
  height:50,
  backgroundColor:'#007BFF',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:8,
},
buttonText: {
  color:'#fff',
  fontSize:18,
  fontWeight:'bold'
}
});

export default App;
