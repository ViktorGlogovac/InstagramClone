//import HomeScreen from "./Screens/HomeScreen";
import * as React from 'react';
import NewPostScreen from "./Screens/NewPostScreen";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
});

export default function App() {
  return (
      <NewPostScreen />
  ); 
};
