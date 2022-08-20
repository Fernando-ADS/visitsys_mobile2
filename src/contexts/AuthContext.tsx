import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { createContext } from "react";
import { useState, ReactNode } from "react";
import { api } from "../services/api";



type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    login: (credentials: LoginProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string
}

type AuthProviderProps = {
    children: ReactNode;
}

type LoginProps = {
    email: string;
    password: string;
}


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps){
    const[user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''

    })


    const [loadingAuth, setLoadingAuth] = useState(false);

    const isAuthenticated = !!user.name;

    async function login({email, password}: LoginProps){
        setLoadingAuth(true);

        try{
            const response = await api.post('/session', {
              email,
              password  
            })

        console.log(response.data);

            const {id, name, token} = response.data;

            const data = {
                ...response.data
            };

            await AsyncStorage.setItem('@visit',JSON.stringify(data));
            
            api.defaults.headers.common['Authorization'] = 'Bearer ${token}'

            setUser({
                id,
                name,
                email,
                token,
            })

            setLoadingAuth(false);

        }   
        catch(err){
            console.log('erro ao acessar' + err);
            setLoadingAuth(false);
        }
    }


    return(
        <AuthContext.Provider value={{user, isAuthenticated, login}}>
            {children}
        </AuthContext.Provider> 
    )
}