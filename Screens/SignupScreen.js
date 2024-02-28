import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SignupForm from '../Components/SignupScreen/SignupForm';



const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                source={require('../assets/Instagram_icon.png')}
                style = {{height: 100, width: 100}} 
            />
        </View>

        {/* Signup Form */}
        <SignupForm navigation={navigation}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 50,
      paddingHorizontal: 12,
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 60,
    },
  });

export default SignupScreen;
