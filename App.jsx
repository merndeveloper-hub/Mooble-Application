import React, { Component, useState } from 'react'
import { Button,StyleSheet, Text, TextInput, View } from 'react-native'
import Student from './components/Student'

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:"Owais",
    }
  }
  
  updateName(val){
  this.setState({name:val});
  }
  
  render() {
    return (
      <View>
        <Text style={{color:'red', fontSize: 30}}>{this.state.name}</Text>
      <TextInput placeholder='Enter your name' onChangeText={(text) => this.updateName(text)}/>
      <Button title='Press Me' />
      <Student name={this.state.name}/>
      </View>
    )
  }
}
export default App