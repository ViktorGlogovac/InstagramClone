import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { USERS } from '../../dummyData/data';
import UserLogo from './UserLogo';

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <TouchableOpacity>
            <UserLogo imageUri={story.image} size={70} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>
              {
                story.user.length > 11 
                ? story.user.slice(0, 10).toLowerCase() + '...' 
                : story.user.toLowerCase()
              }
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Stories;
