import React from 'react';
import { Image, StyleSheet } from "react-native";
import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import Screen from '../components/Screen'

const validationScheme = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppForm 
                initialValues={{email: "", password: ""}}
                onSubmit={ values => console.log(values)}
                validationSchema={validationScheme}
            >
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"                            
                    keyboardType="email-address"
                    name="email"
                    placeholder="email"
                    textContentType="emailAddress"
                />                        
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="password"
                    secureTextEntry                            
                />                        
                <SubmitButton title="Login" />
            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    }
})

export default LoginScreen;