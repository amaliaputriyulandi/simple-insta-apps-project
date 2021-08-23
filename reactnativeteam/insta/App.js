import 'react-native-gesture-handler';
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/Foundation';

import { persisStore, store } from "./src/Store/Store"
import {navigationRef} from './src/Function/navigate';

const Stack = createStackNavigator()


export default function App() {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persisStore}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Splashscreen" >

            
              
          </Stack.Navigator>
        </NavigationContainer>

      </PersistGate>

    </Provider >
  )
}