import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUserStore } from './src/store/user';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Buffer } from "buffer";
import ProfileScreen from './src/screens/ProfileScreen';
import MainMenu from './src/screens/MainMenu';
import GameScreen from './src/screens/GameScreen';
import AvatarScreen from './src/screens/ShopScreen';
import Authentication from './src/screens/Authentication';
import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links'
import { useRoomStore } from './src/store/room';

window.localStorage = AsyncStorage;
global.Buffer = Buffer;

export default function App() {
    const joinRoom = useRoomStore(state => state.joinRoom)
    const handleDynamicLink = async (link: FirebaseDynamicLinksTypes.DynamicLink) => {
        await joinRoom(link.url)
      };
    useEffect(() => {
        dynamicLinks().getInitialLink().then(async (link) => {
            if (link) {
                await joinRoom(link.url)
            }
        })
        const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
        return () => unsubscribe();
    }, []);
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
                    name="ProfileScreen"
                    component={ProfileScreen}
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
    const isAuthenticated = useUserStore(state => state.isAuthenticated)
    const login = useUserStore(state => state.login)
    const user = useUserStore(state => state.user)
    useEffect(() => {
        const fetchUserData = async () => {
            await login()
        }
        if (isAuthenticated) {
            fetchUserData()
        }
    }, [isAuthenticated])
    return (
        <NavigationContainer>
            <StatusBar hidden />
            <Stack.Navigator initialRouteName="MainMenu">
                {isAuthenticated ? mainStackScreens() : authStackScreens()}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
