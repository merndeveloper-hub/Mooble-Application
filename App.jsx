import React, { useState } from 'react'
import { Button,StyleSheet, Text, TextInput, View } from 'react-native'

const App = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [display, setDisplay] = useState(false);
 

 const resetFormData = () => {
  setDisplay(false);
  setPassword("");
  setEmail("");
  setName("");
 }

  return (
    <View>
 <Text style={{fontSize: 30}}>Simple Form in React</Text>
<TextInput 
value={name}
onChangeText={(text) => setName(text)}
placeholder='Enter your Name' style={styles.textInput}/>

<TextInput 
value={email}
onChangeText={(text) => setEmail(text)}
placeholder='Enter your Email' style={styles.textInput}/>

<TextInput 
value={password}
secureTextEntry={true}
onChangeText={(text) => setPassword(text)}
placeholder='Enter your Password' style={styles.textInput}/>
  
  <View style={{marginBottom: 10}}> 

    <Button color={"green"} title='Print Details' onPress={() => setDisplay(true)}/>
  </View>
    <Button title='Clear Details' onPress={resetFormData}/>
    

{
display ? 
  <View>
  <Text style={{fontSize:25}}>User Name is: {name}</Text>
  <Text style={{fontSize:25}}>User Name is: {password}</Text>
  <Text style={{fontSize:25}}>User Name is: {email}</Text>
  </View>  
  : null
}
</View>
);
};


const styles = StyleSheet.create({
  textInput: {
    fontSize:18,
    color:"blue",
    borderWidth: 2,
    borderColor:"blue",
    margin:10
  }
})

export default App