import React from "react";
import { Image, View } from "react-native";
import Theme, { createStyle } from 'react-native-theming'
import { PlayerProfileProps } from "../../../types";

interface Player {
    name: string,
    avatar: string
}
export default function RoomPlayerProfile({name, avatar}: PlayerProfileProps) {
    return (
        
        <View style={styles.overlayProfileAndText}>
            <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
            <Theme.Text style={styles.overlayProfileText}>{name}</Theme.Text>
        </View>
    )
}

const styles = createStyle({

    overlayProfileAndText: {
        flexDirection: "row",
    },
    overlayProfileText: {
        marginLeft: 30,
        color: '@overlayTextColor',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: '@fontFamily'
    },
    profileImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }
})