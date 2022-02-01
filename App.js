import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/Profile';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register'
import LoginScreen from './screens/Login'
import { setAppHasLaunched, getAppLaunched } from './utils/storage';
import { AuthContext, AuthProvider } from './context/Auth';

const Stack = createNativeStackNavigator()



const MainComponent = () => {

  // const auth = useContext(AuthContext)

  // const { firstLoaded, loading } = auth;
  const [loading, setLoading] = useState(false)
  const [firstLoaded, setFirstLoaded] = useState(false)

  useEffect(() => {
    getAppLaunched().then(
      (response) => {
        if (response === null || response === undefined) {
          console.log("First used ", response)
          alert("First time use of app")

          setFirstLoaded(true)
          console.log(firstLoaded, 1)
          setAppHasLaunched()
        }
        else {
          setFirstLoaded(false)
          console.log(firstLoaded)
          console.log("Present ", response)
          alert("app has been used for some time")
        }
      }
    )
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstLoaded ? (
          <>

            <Stack.Screen component={LoginScreen} name='Login' />
            <Stack.Screen component={RegisterScreen} name='Register' />
            <Stack.Screen component={HomeScreen} name='Home' />
            <Stack.Screen component={ProfileScreen} name='Profile' />
          </>
        ) : (
          <>
            <Stack.Screen component={ProfileScreen} name='Profile' />
            <Stack.Screen component={LoginScreen} name='Login' />
            <Stack.Screen component={RegisterScreen} name='Register' />
            <Stack.Screen component={HomeScreen} name='Home' />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {



  return (
    <AuthProvider>
      <MainComponent />
    </AuthProvider>
  );
};

export default App;
