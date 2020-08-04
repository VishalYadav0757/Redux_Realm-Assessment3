import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
        return (
          <View style = {styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= '#000000' />
            <Text style = {styles.welcome}>Welcome</Text>
            <View style = {styles.btnContainer}>
                <TouchableOpacity
                style = {styles.userBtn}
                onPress = {() => navigation.navigate('AdminLogin')}>
                <Text style = {styles.btnTxt}>Login as Admin</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.userBtn}
                onPress = {() => navigation.navigate('UserLogin')}>
                <Text style = {styles.btnTxt}>Login as User</Text>
                </TouchableOpacity>
            </View>
          </View>
        );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8A80',
  },
  welcome: {
    fontSize: 35,
    margin: 10,
    color: '#ffffff',
    textAlign: 'center'
  },
  input: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  userBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%'
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center'
  },
});

export default Login;