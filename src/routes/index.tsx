import React from "react";
import { useContext } from "react";
import { View, ActivityIndicator} from "react-native";
import { AuthContext } from "../contexts/AuthContext";


import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){
    const {isAuthenticated} = useContext(AuthContext);
    const loading = false;
    
    if(loading){
        return(
            <View style={{
                flex:1,
                backgroundColor:'#c7e9f7',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <ActivityIndicator size={40} color="#1483ae"/>
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;