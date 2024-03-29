import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Button } from 'react-native-elements';
import validUrl from 'valid-url'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = ({ navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState()
  return (
    <>
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        console.log(values)
        console.log('Your post was submitted successfully')
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
          <>
          <View style={{
            margin: 20, 
            justifyContent: 'space-between', 
            flexDirection: 'row'
            }}>
            <Image
              source={validUrl.isUri(thumbnailUrl) ? { uri: thumbnailUrl } : require('../../assets/icons8-upload-image.png')}
              style={{ width: 100, height: 100 }}
            />
          {/* Caption Input */}
          <View style={{ flex: 1, marginLeft: 10 }}>
          <TextInput 
            style={{color: 'white', fontSize: 20}}
            placeholder='Write a caption ...' 
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
          />
          </View>

          </View>

          <Divider width={0.2} orientation='vertical' />

          {/* URL Input */}
          <TextInput 
            onChange = {e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 20}}
            placeholder='Enter Image Url' 
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: 'red'}}>
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
          </>
        }
      </Formik>
    </>
  )
}

export default FormikPostUploader;

