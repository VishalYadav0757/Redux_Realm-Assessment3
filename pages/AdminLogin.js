import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image,TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AdminLogin = props => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  

  const checkLogin = async() => {
    try{
        const uemail=await AsyncStorage.getItem('UserEmail')
        const upassword=await AsyncStorage.getItem('UserPassword')
        if(userEmail=='' && userPassword=='')
        {
            alert('Credentials Required!!')
        }
        else if(userEmail=='' && userPassword==upassword)
        {
            alert('Oops Email is Missing!!')
        }
        else if(userEmail==uemail && userPassword=='')
        {
            alert('Oops Password is Missing!!')
        }
        else if(userEmail==uemail && userPassword==upassword)
        {
            props.navigation.navigate('AdminHomeScreen')
        }
        else
        {
            alert('Incorrect username or password!')
        }
      }
      catch(error)
      {
        console.log(error)
      }
  }
  return (
    <View style={styles.mainBody}>
                <StatusBar barStyle="light-content" backgroundColor= '#000000' />
                <Text style = {styles.welcome}>Welcome</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={userEmail => setUserEmail(userEmail)}
                    placeholder="Enter Email    (dummy@example.com)"
                    placeholderTextColor="#000000"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={userPassword => setUserPassword(userPassword)}
                    placeholder="Enter Password"
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={checkLogin}>
                    <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerTextStyle}
                    onPress={() => props.navigation.navigate('AdminSignup')}>
                    <Text style={styles.buttonTextStyle}>Signup</Text>
                </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44336',
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    color: '#FFFF00',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#2196F3',
    width: '30%'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    padding: 15,
    fontSize: 20,
    textAlign: 'center'
  },
  inputStyle: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  registerTextStyle: {
    color: '#0d0d0d',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14
  }
});

export default AdminLogin;