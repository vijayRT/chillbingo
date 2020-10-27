import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { AvatarScreenProps } from "../../types"
import Theme,{  createStyle} from 'react-native-theming';
import {ThemedButton} from '../components/ThemedButton'
import ThemeCarousel from '../components/ThemeScreen/ThemeCarousel'
//import Carousel from 'react-native-snap-carousel';

export default function AvatarScreen({ navigation }: AvatarScreenProps) {
    return (
        <Theme.ImageBackground source='@backgroundImage' style={styles.imageBackground}>
            <View style={styles.container}>
                {/* Top Container */}
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                        <Image source={require('../../assets/gears_white.png')} style={styles.backImage} />
                    </TouchableOpacity>
                </View>

                {/* Button Container */}
                <View style={styles.menuContainer}>
                <ThemedButton containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Themes" titleStyle={styles.buttonText}
                    />
                    <ThemedButton containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Avatars" titleStyle={styles.buttonText}
                    />


                </View>

<View style={styles.carouselContainer}>
<ThemeCarousel/>
</View>

                <View style={styles.menuContainer}>
                    <ThemedButton containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Purchase" titleStyle={styles.buttonText}
                    />

                    <ThemedButton containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Equip" titleStyle={styles.buttonText}
                    />
                </View>

            </View>

        </Theme.ImageBackground>

    );
};

const styles = createStyle({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    topContainer: {
        flex: 1,
        marginRight: 10,
        marginTop: 30,
        alignItems: 'flex-end',

    },
    backImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        //justifyContent:'space-around',

    },
    button: {
        //width: 230,
        //height: 57,
        backgroundColor: '@backgroundColor',
        //borderRadius: 50,
    },

    buttonText: {
        fontSize: 18,
        fontFamily:'@fontFamily'
    },
    profileContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    shopProfile: {

    },
    shopProfileAndText: {
        //flexDirection: "row",
    },
    overlayProfileText: {
        marginLeft: 30,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,

    },
    profileImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    profileImageBigContainer: {
        flex: 3,
        alignItems: 'center',
    },
    profileImageBigSize: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    carouselContainer:{
        flex:4,
        alignItems:'center',
        justifyContent:'center'

    }

});