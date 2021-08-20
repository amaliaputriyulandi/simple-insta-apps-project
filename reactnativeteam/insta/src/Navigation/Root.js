import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from '../Screen/Login/Login'
const Stack = createStackNavigator();

export default function Root() {
  const Token = useSelector(state => state.Login.data.token);
  const Route = Token ? 'Home' : 'Login';

  return (
    <>
      <StatusBarView />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={Route}>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
