import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Button } from 'react-native-elements';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = () => {
  //const [thumbnailUrl, setThumbnailUrl] = useState('../../assets/icons8-upload-image.png')
  return (
    <>
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
          <>
          <View style={{
            margin: 20, 
            justifyContent: 'space-between', 
            flexDirection: 'row'
            }}>
            <Image source={require('../../assets/icons8-upload-image.png')} style={{width: 100, height: 100}}/>

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

          <TextInput 
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
          </>
        }
      </Formik>
    </>
  )
}

export default FormikPostUploader;

