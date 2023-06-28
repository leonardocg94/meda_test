/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {FC} from 'react';
import commonStyles1 from '../home/homeScreen.styles';
import commonStyles2 from '../loginAdmin/loginForm.styles';
import {formPlaceholders, useUserManagementNew} from './UserManagmentNew.logic';

type Props = {onCancel: () => void; reload: () => void};
export const UserManagmentNew: FC<Props> = ({onCancel, reload}) => {
  const {form, changeHandler, disabled, msg, submitHandler} =
    useUserManagementNew(reload);

  return (
    <View>
      <Text style={commonStyles2.title}>Nuevo usuario</Text>
      {Object.keys(form).map(key => (
        <TextInput
          style={commonStyles2.input}
          key={key}
          defaultValue={form[key as keyof typeof form]}
          placeholder={formPlaceholders[key as keyof typeof formPlaceholders]}
          onChangeText={text =>
            changeHandler({key, value: text} as {
              key: keyof typeof form;
              value: string;
            })
          }
          secureTextEntry={key === 'password'}
        />
      ))}
      {msg.text ? (
        <Text
          style={[
            commonStyles2.msg,
            {color: msg.type === 'error' ? 'red' : 'green'},
          ]}>
          {msg.text}
        </Text>
      ) : null}
      <TouchableOpacity
        disabled={disabled}
        style={commonStyles1.button}
        activeOpacity={0.8}
        onPress={submitHandler}>
        <Text style={commonStyles1.buttonText}>Agregar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[commonStyles1.button, {marginTop: 15}]}
        activeOpacity={0.8}
        onPress={onCancel}>
        <Text style={commonStyles1.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};
