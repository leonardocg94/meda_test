/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {LoginForm} from './LoginForm';

export const LoginAdminScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginForm />
    </SafeAreaView>
  );
};
