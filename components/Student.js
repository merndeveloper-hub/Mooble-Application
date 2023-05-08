import React, { Component, useState } from 'react'
import { Button,StyleSheet, Text, TextInput, View } from 'react-native'

class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{color:'red', fontSize: 30}}>Student name: {this.props.name}</Text>
     
      </View>
    )
  }
}
export default Student