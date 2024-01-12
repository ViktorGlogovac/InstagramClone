import { SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/NewPost/AddNewPost'


const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen