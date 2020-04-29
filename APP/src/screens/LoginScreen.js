import React, { memo, useState } from 'react';
import {AsyncStorage, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
const axios = require('axios');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: 'rushan', error: '' });
  const [password, setPassword] = useState({ value: 'rushan', error: '' });


  


  const _onLoginPressed = () => {
    var userName=email.value;
    var pass=password.value;
    // url="http://192.168.8.100/BusTrackingSystem/API/auth.php?userName="+userName+"&pass="+pass;
    // console.log(url);
    axios.post("http://192.168.8.100/BusTrackingSystem/API/auth.php?userName="+userName+"&pass="+pass, {
      userName: 'admin',
      pass: 'pass'
    })
    .then(function (response) {
      //console.log(response.data.role);
      if (response.data.success && response.data.role=="STUDENT" )
       {
       
        AsyncStorage.setItem('id', JSON.stringify(response.data.id), () => {});
          navigation.navigate('DashboardStu');
      }
      else  if (response.data.success && response.data.role=="DRIVER" ) 
      {
        
        AsyncStorage.setItem('id', response.data.id, () => {});
        
      navigation.navigate('Dashboard');
    }

      else alert("Error in login");
    })
    .catch(function (error) {
      console.log(error);
    });

    //navigation.navigate('DashboardStu');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        // autoCompleteType="email"
        // textContentType="emailAddress"
        // keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
