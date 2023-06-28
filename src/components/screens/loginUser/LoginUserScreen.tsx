/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {LoginForm} from '../loginAdmin/LoginForm';

export const LoginUserScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginForm />
    </SafeAreaView>
  );
};
