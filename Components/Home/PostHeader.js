import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import UserLogo from './UserLogo'
import { USERS } from '../../dummyData/data'

const PostHeader = ({post}) => {
  return (
    <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 5, 
        alignItems: 'center'
        }}>
        <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <UserLogo imageUri={post.profilePic} size={30} />
        <Text style={{color:'white', marginLeft: 5, fontWeight: 600}}>{post.user}</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View>
                <Text style={{
                    color: 'white',
                    fontWeight: 900,
                    padding: 10,
                }}>...</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default PostHeader