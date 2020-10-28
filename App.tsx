import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { usePlayerStore } from './src/store/player';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Buffer } from "buffer";


import Settings from './src/screens/Settings';
import MainMenu from './src/screens/MainMenu';
import GameScreen from './src/screens/GameScreen';
import AvatarScreen from './src/screens/ShopScreen';
import Authentication from './src/screens/Authentication';


window.localStorage = AsyncStorage;
global.Buffer = Buffer;

export default function App() {
    const Stack = createStackNavigator();
    const mainStackScreens = () => {
        return (
            <>
                <Stack.Screen
                    name="MainMenu"
                    component={MainMenu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GameScreen"
                    component={GameScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AvatarScreen"
                    component={AvatarScreen}
                    options={{ headerShown: false }}
                />
            </>
        )
    }
    const authStackScreens = () => {
        return (
            <Stack.Screen
                name="AuthenticationScreen"
                component={Authentication}
                options={{ headerShown: false }}
            />
        )
    }
    const isAuthenticated = usePlayerStore(state => state.isAuthenticated)
    const user = usePlayerStore(state => state.user)
    console.log(isAuthenticated)
    console.log(JSON.stringify(user, undefined, 4))
    return (
        <NavigationContainer>
            <StatusBar hidden />
            <Stack.Navigator initialRouteName="MainMenu">
                {isAuthenticated ? mainStackScreens() : authStackScreens()}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
