/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {PostList} from './PostList';

export const PostsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <PostList />
    </SafeAreaView>
  );
};
