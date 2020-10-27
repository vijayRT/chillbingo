import React, { useState } from 'react';
import { Button, Overlay, Image } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SettingsScreenProps } from "../../types"

export default function Settings({navigation}: SettingsScreenProps) {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <ImageBackground source={require('../../assets/galaxy.jpg')} style={styles.imageBackground}>
            <View style={styles.topContainer}>
                    <Image source={require('../../assets/gears_white.png')} style={styles.backImage} onPress={() => navigation.navigate('MainMenu')}/>
                </View>
            <View style={styles.settingsContainer} >
                <Text style={styles.settingsText}> Settings</Text>
            </View>
            <View style={styles.sliderContainer}>
                <View style={styles.sliderMenu}>
                    <Text style={styles.sliderText}> Music</Text>
                    <Slider style={styles.sliderBar}
                        minimumValue={0}
                        maximumValue={10}
                        value={5}
                        minimumTrackTintColor="white"
                        maximumTrackTintColor="#bdc3c7" />
                </View>

                <View style={styles.sliderMenu}>
                    <Text style={styles.sliderText}> Sound</Text>
                    <Slider style={styles.sliderBar}
                        minimumValue={0}
                        maximumValue={10}
                        value={5}
                        minimumTrackTintColor="white"
                        maximumTrackTintColor="#bdc3c7" />
                </View>
            </View>


            <View style={styles.menuContainer}>
                <Button raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                    title="About" onPress={toggleOverlay} titleStyle={styles.buttonText} />
                <Overlay overlayStyle={styles.overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text style={styles.overlayText}>This App was Created by Yorozuya Games by Kronosfear, Kyoma and ShadowGear in the DiningRoom</Text>
                </Overlay>
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
        marginRight:10,
        marginTop:30,
        alignItems:'flex-end',
    },
    backImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    settingsContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    sliderContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sliderMenu: {
        flexDirection: 'row',
        alignContent: 'flex-start',
    },
    menuContainer: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    settingsText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: 'center',
    },
    sliderText: {
        color: 'white',
        fontSize: 30,
        marginRight: 20
    },
    button: {
        width: 230,
        height: 57,
        backgroundColor: '#3B3B3B',
        borderRadius: 50,
    },
    buttonContainer: {
        margin: 10,
    },
    buttonText: {
        fontSize: 18,
    },
    sliderBar: {
        width: 250,
    },
    overlayStyle:
    {

        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        height: "30%",
        width: 300,
        borderRadius: 30,
    },
    overlayText:
    {
        color: 'yellow',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 22,

    }
});
