import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from './src/screens/Settings';
import MainMenu from './src/screens/MainMenu';
import GameScreen from './src/screens/GameScreen';
import AvatarScreen from './src/screens/AvatarScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AvatarScreen"
          component={AvatarScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
