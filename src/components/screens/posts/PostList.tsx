/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {usePostList} from './PostList.logic';
import commonStyles from '../loginAdmin/loginForm.styles';

export const PostList = () => {
  const {posts} = usePostList();

  return (
    <>
      <View>
        <Text style={commonStyles.title}>Lista de posts</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        {posts &&
          posts.length > 0 &&
          posts.map(post => (
            <View key={post.id} style={styles.card}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.body}>{post.body}</Text>
            </View>
          ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 13,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  body: {
    textAlign: 'justify',
    fontWeight: '300',
  },
});
