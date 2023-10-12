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
        </View>
    );
}

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
