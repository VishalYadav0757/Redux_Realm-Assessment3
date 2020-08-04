import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AdminSignup = ({navigation}) => {  
  const[UserName,setUserName]=useState('');
  const[UserEmail,setUserEmail]=useState('');
  const[UserPassword,setUserPassword]=useState('');

  const onSubmit = async() => {
       try{
            if(UserName=='' || UserEmail==''||UserPassword=='')
            {
                alert('Please fill the entries')
            }
            else if(UserName==UserEmail && UserEmail=='' && UserPassword==UserPassword)
            {
                alert('Email Required!!')
            }
            else if(UserName==UserEmail && UserEmail==UserEmail && UserPassword=='')
            {
                alert('Password Required!!')
            }
            else
            {
                await AsyncStorage.setItem('UserName',UserName)
                await AsyncStorage.setItem('UserEmail',UserEmail)
                await AsyncStorage.setItem('UserPassword',UserPassword)
                alert('Registration Successfully')
                navigation.navigate('AdminLogin')   
            }
        }
       catch(error){
           console.log(error)
       }
    }
  
  return (
          <View style={styles.SectionStyle}>
            <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                placeholder="Enter UserName"
                placeholderTextColor="#0c0c0e"
                autoCapitalize="sentences"
            />
            <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email    (dummy@example.com)"
                placeholderTextColor="#0c0c0e"
            />
            <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                placeholderTextColor="#0c0c0e"
                secureTextEntry={true}
              />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onSubmit}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA726',
  },
  buttonStyle: {
    backgroundColor: '#388E3C',
    width: '30%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  inputStyle: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  }
});

export default AdminSignup; 