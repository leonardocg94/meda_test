/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {MainNavigatorParams} from '../../../navigators/MainNavigator';
import styles from './homeScreen.styles';

const HOME_BUTTONS = [
  {text: 'Login Admin', path: 'LoginAdmin'},
  {text: 'Login User', path: 'LoginUser'},
  {text: 'Posts', path: 'Posts'},
];

type Props = NativeStackScreenProps<MainNavigatorParams, 'Home'>;
export const HomeScreen: FC<Props> = ({navigation}) => {
  const redirectHandler = (path: any) => navigation.navigate(path);

  return (
    <SafeAreaView style={styles.root}>
      {HOME_BUTTONS.map(({path, text}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={path}
          onPress={() => redirectHandler(path)}
          style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};
