/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MainNavigatorParams} from '../../../navigators/MainNavigator';
import commonStyles from '../loginAdmin/loginForm.styles';

type Props = NativeStackScreenProps<MainNavigatorParams, 'UserInfo'>;
export const UserInfoScreen: FC<Props> = ({route}) => {
  console.log({route});
  const {name} = route.params || {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={commonStyles.title}>
        {name ? name : 'Error con el nombre'}
      </Text>
    </SafeAreaView>
  );
};
