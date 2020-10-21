import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { AvatarScreenProps } from "../../types"
//import Carousel from 'react-native-snap-carousel';

export default function AvatarScreen({ navigation }: AvatarScreenProps) {
    return (
        <ImageBackground source={require('../../assets/galaxy.jpg')} style={styles.imageBackground}>
            <View style={styles.container}>
                {/* Top Container */}
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                        <Image source={require('../../assets/gears_white.png')} style={styles.backImage} />
                    </TouchableOpacity>
                </View>

                {/* Button Container */}
                <View style={styles.menuContainer}>
                    <Button containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Avatar" titleStyle={styles.buttonText}
                    />

                    <Button containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Board Skin" titleStyle={styles.buttonText}
                    />
                </View>

                <View style={styles.profileContainer}>
                    <View style={styles.shopProfileAndText}>
                        <Image source={require('../../assets/person.png')} style={styles.profileImage} />
                    </View>

                    <View style={styles.shopProfileAndText}>
                        <Image source={require('../../assets/person.png')} style={styles.profileImage} />
                    </View>

                    <View style={styles.shopProfileAndText}>
                        <Image source={require('../../assets/person.png')} style={styles.profileImage} />
                    </View>

                    <View style={styles.shopProfileAndText}>
                        <Image source={require('../../assets/person.png')} style={styles.profileImage} />
                    </View>
                </View>

                <View style={styles.profileImageBigContainer}>
                    <View style={styles.shopProfileAndText}>
                        <Image source={require('../../assets/person.png')} style={styles.profileImageBigSize} />
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    <Button containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Purchase" titleStyle={styles.buttonText}
                    />

                    <Button containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Equip" titleStyle={styles.buttonText}
                    />
                </View>

            </View>

        </ImageBackground>

    );
};

const styles = StyleSheet.create({
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
        backgroundColor: '#3B3B3B',
        //borderRadius: 50,
    },

    buttonText: {
        fontSize: 18
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

});