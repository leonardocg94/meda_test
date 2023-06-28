/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../home/homeScreen.styles';
import styles from './loginForm.styles';
import {useLoginForm} from './LoginForm.logic';

export const LoginForm = () => {
  const {changeHandler, submitHandler, msg, form, disabled} = useLoginForm();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={text => changeHandler({text, key: 'username'})}
        defaultValue={form.username}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Contraseña"
        onChangeText={text => changeHandler({text, key: 'password'})}
        defaultValue={form.password}
      />
      {msg ? <Text style={styles.msg}>{msg}</Text> : null}
      <TouchableOpacity
        disabled={disabled}
        style={commonStyles.button}
        activeOpacity={0.8}
        onPress={submitHandler}>
        <Text style={commonStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
