import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'
import { Divider } from 'react-native-elements';
import PostImage from './PostImage';
import UserLogo from './UserLogo';
import PostFooter from './PostFooter';


const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <PostFooter post={post}/>
    </View>
  )
}

export default Post