import React from "react";
import { useState } from "react";
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import css from "../../css/css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { KeyboardAvoidingView } from "react-native";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../../firebaseConfig/firebaseConfig";
import { UserCredential } from "@firebase/auth";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const imgbackground = "../../assets/img/fundo.png";


export default function Login(){
    
    //const{login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const navigation = useNavigation();

    /*
    async function handleLogin(){
        if(email === '' || password === ''){
            return;
        }
        await login({email,password})
    }
    */

    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
            console.log('Logado!')
            const user = UserCredential.user;
            console.log(user)
            //Alert.alert('deu certo');
            navigation.navigate('Home');
        })
        .catch(error => {
            console.log(error)
            Alert.alert('Email ou senha incorretos');
        })
    }



    return(
        <ImageBackground source={require(imgbackground)} style={css.imgfundo}>
            <Image style={css.logo} source={require('../../assets/img/logomarca.png')}/>

            <View style={css.inputContainer}>
                <TextInput
                    style={css.input}
                    placeholder='Email'
                    placeholderTextColor='#a8b8c2'
                    value = {email}
                    onChangeText={(text)=> setEmail(text)}    
                />

                <TextInput
                    style={css.input}
                    placeholder='Senha'
                    placeholderTextColor='#a8b8c2'
                    secureTextEntry={true}
                    value = {password}
                    onChangeText={(text)=> setPassword(text)}
                />


                <TouchableOpacity style={css.buttonlogin} onPress={handleLogin}>
                    <Text style={css.buttonText}>Entrar</Text>
                </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}
