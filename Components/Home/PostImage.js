import { View, Text, Image } from 'react-native';
import React from 'react';
import { USERS } from '../../dummyData/data';

const PostImage = ({ post }) => {
  return (
    <View 
    style={{
        width: '100%',
        height: 450,
    }}>
        <Image 
        source={{ uri: post.image }}
        style={{ width: '100%', height: '100%', resizeMode: 'cover'}}
        />
    </View>
  );
}

export default PostImage;
