//import HomeScreen from "./Screens/HomeScreen";
import * as React from 'react';
import NewPostScreen from "./Screens/NewPostScreen";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import SignedInStack from './Screens/Navigation';

export default function App() {
  return (
      <SignedInStack />
  ); 
};
