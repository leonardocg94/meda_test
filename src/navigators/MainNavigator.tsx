/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {LoginAdminScreen} from '../components/screens/loginAdmin/LoginAdminScreen';
import {LoginUserScreen} from '../components/screens/loginUser/LoginUserScreen';
import {PostsScreen} from '../components/screens/posts/PostsScreen';
import {HomeScreen} from '../components/screens/home/HomeScreen';
import {UserManagementScreen} from '../components/screens/userManagment/UserManagment';
import {UserInfoScreen} from '../components/screens/userInfo/UserInfoScreen';

export type MainNavigatorParams = {
  Home: undefined;
  Posts: undefined;
  LoginAdmin: undefined;
  LoginUser: undefined;
  UserManagment: undefined;
  UserInfo: {name: string};
};

const {Navigator, Screen} = createStackNavigator<MainNavigatorParams>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="LoginAdmin" component={LoginAdminScreen} />
        <Screen name="LoginUser" component={LoginUserScreen} />
        <Screen name="Posts" component={PostsScreen} />
        <Screen name="UserManagment" component={UserManagementScreen} />
        <Screen name="UserInfo" component={UserInfoScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
