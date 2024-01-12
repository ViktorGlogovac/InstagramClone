import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FormikPostUploader from './FormikPostUploader';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormikPostUploader />
    </View>
  );
};

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={require('../../assets/icons8-back-pointer.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute', 
    left: 0,
    right: 0,
    textAlign: 'center',
  },
});

export default AddNewPost;
