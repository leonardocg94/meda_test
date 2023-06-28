/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {FC} from 'react';
import commonStyles1 from '../home/homeScreen.styles';
import commonStyles2 from '../loginAdmin/loginForm.styles';
import {useUserManagmentList} from './UserManagmentList.logic';

type Props = {onAddNew: () => void; reload: boolean};
export const UserManagmentList: FC<Props> = ({onAddNew, reload}) => {
  const {msg, users} = useUserManagmentList(reload);
  return (
    <>
      <View>
        <Text style={commonStyles2.title}>Lista de usuario</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        {users &&
          Object.keys(users).length > 1 &&
          Object.keys(users).map(key => {
            if (key === 'admin') return null;
            return (
              <View
                key={key}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 20,
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 18}}>Usuario: {key}</Text>
                <Text style={{fontSize: 18}}>Nombre: {users[key].name}</Text>
                <Text style={{fontSize: 18}}>
                  Contraseña: {users[key].password}
                </Text>
              </View>
            );
          })}
      </ScrollView>
      {msg ? <Text style={commonStyles2.msg}>{msg}</Text> : null}
      <View>
        <TouchableOpacity
          style={commonStyles1.button}
          activeOpacity={0.8}
          onPress={onAddNew}>
          <Text style={commonStyles1.buttonText}>Agregar Nuevo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
