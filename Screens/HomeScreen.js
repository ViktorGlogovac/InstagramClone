import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header';
import Post from '../Components/Home/Post';
import Stories from '../Components/Home/Stories';
import { POSTS } from '../dummyData/posts';

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index)=> 
          <Post post={post} key={index} />
        )}
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default HomeScreen