import React from "react";
import { Text,TextInput, View, Button } from "react-native";
import { Formik } from "formik";

const initialValues = {
    email: '',
    password:''
};


export default function LogInPage(){
    return  <Formik initialValues={initialValues} onSubmit ={ values => console.log(values)}>
        {({handleChange, handleSubmit, values})=>{
                return <View>
                    <TextInput placeholder="Email" 
                    value={values.email}
                    onChange={handleChange('email')}
                    />
                    <TextInput placeholder="Password" 
                    value={values.password}
                    onChange={handleChange('password')}
                    />
                    <Button onPress={handleSubmit} title='Log In'/>
                </View>
            }}
        </Formik>
};