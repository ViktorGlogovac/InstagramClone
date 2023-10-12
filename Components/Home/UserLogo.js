import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserLogo = ({ imageUri, size = 70 }) => { 
  const dynamicStyles = {
    width: size,
    height: size,
    borderRadius: size / 2,
    marginLeft: 6,
    borderWidth: size/30,
    borderColor: '#e95950',
  };

  return (
      <Image source={{ uri: imageUri }} style={dynamicStyles} />
  );
}

export default UserLogo;
