import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import { usePlayerStore } from '../store/player';
import {GoogleSigninButton} from '@react-native-community/google-signin'

export default function Authentication() {
    const login = usePlayerStore(state => state.login)
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={require('../../assets/bingo_logo_light.png')} />
            </View>
            <View style={styles.subcontainer}>
            <GoogleSigninButton
                onPress={() => login()}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000"
    },
    subcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

