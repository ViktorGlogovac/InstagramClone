import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const PostFooter = ({ post }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={styles.container}>
                {/* Like, Comment, and Share Buttons */}
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <Image 
                            style={styles.icon}                    
                            source={require('../../assets/icons8-heart-32.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            style={styles.icon}                    
                            source={require('../../assets/icons8-comments-50.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            style={styles.icon}                    
                            source={require('../../assets/icons8-share-32.png')}
                        />
                    </TouchableOpacity>
                </View>

                {/* Save Button */}
                <View>
                    <TouchableOpacity>
                        <Image 
                            style={styles.icon}                    
                            source={require('../../assets/icons8-save-24.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text style={{color: 'white', marginHorizontal: 10, fontWeight: '600'}}>
            {formatNumberWithCommas(post.likes)} likes
            </Text>
            </View>

            <Caption post ={post}></Caption>
            <CommentsSection post ={post}></CommentsSection>
            <Comments post ={post}></Comments>
        </View>
    );
}

const Caption = ({ post }) => (
    <View style = {{marginTop: 5, marginLeft: 10}}>
    {!!post.comments.length && (
        <Text style={{ color: 'white' }}>
        <Text style={{ fontWeight: '600' }}>{post.user} </Text>
        <Text> {post.caption}</Text>
        </Text>
    )}
    </View>
)

const CommentsSection = ({post}) => (
    <View style = {{marginTop: 5}}>
    <Text style={{color: 'grey', marginLeft: 10}}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? 'commnets' : 'comment'}
    </Text>
    </View>
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key ={index}>
                <Text style={{color: 'white', marginLeft: 10}}>
                    <Text style={{ fontWeight: '600'}}>{comment.user}</Text>
                    {' '}{comment.comment}
                </Text>
            </View>
        ))}
    </>
)

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 0,
        marginTop: 10,
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
});

export default PostFooter;
