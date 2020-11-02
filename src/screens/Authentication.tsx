import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import { useUserStore } from '../store/user';
import { GoogleSigninButton } from '@react-native-community/google-signin'
import ThemeCarousel from '../components/ShopScreen/ThemeCarousel';
import Theme, { createStyle } from 'react-native-theming';

export default function Authentication() {
    const login = useUserStore(state => state.login)
    return (
        <View style={styles.screen}>
            <Theme.ImageBackground
                source={'@backgroundImage'}
                style={styles.imageBackground}>

                <View style={styles.logoContainer}>

                    <Theme.Text style={styles.logoText1}  >CHILL</Theme.Text><Theme.Text style={styles.logoText2}>BINGO</Theme.Text>
                </View>
                <View style={styles.googleContainer}>
                <GoogleSigninButton
                    onPress={() => login()}
                />
                </View>
            </Theme.ImageBackground>
        </View >

    );
}

const styles = createStyle({
    screen: {
        flex: 1,

    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
        // resizeMode: 'center',
    },
    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText1: {
        fontSize: 70,
        fontFamily: '@fontFamily',
        color: '@logoColor1',
    },
    logoText2: {
        fontSize: 70,
        fontFamily: '@fontFamily',
        color: '@logoColor2',

    },
    googleContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

