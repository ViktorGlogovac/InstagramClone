import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FormikPostUploader from './FormikPostUploader';


const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <FormikPostUploader navigation = {navigation}/>
    </View>
  );
};

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image 
        style={styles.icon}
        source={require('../../assets/icons8-back-pointer.png')}
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
    marginRight:110
  },
});

export default AddNewPost;
