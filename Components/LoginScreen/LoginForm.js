import { View, Text, Button, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    < View style = {styles.wrapper}>
        <View style={styles.inputField}>
            <TextInput 
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-adress'
                textContentType='emailAddress'
                autoFocus={true}
            />
        </View>
        <View style={styles.inputField}>
            <TextInput 
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
            />
        </View>
        <View style={{ alrightItem: 'flex-end', marginBottom: 30 }}>
            <Text style={{color: '#6BB0F5'}}>Forgot Password</Text>
        </View>

      <Pressable titleSize={20} style = {styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    },

    buttonText: {
        
    }

})

export default LoginForm