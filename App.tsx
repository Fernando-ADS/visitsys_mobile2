import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/views/Login'
import Home from './src/views/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthContext, AuthProvider } from './src/contexts/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor='#c7e9f7' barStyle='dark-content' translucent={true}/>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>



    /*
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor='#c7e9f7' barStyle='dark-content' translucent={true}/>

          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7e9f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
