import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { MainMenuScreenProps } from "../../types"
import CreateRoomOverlay from '../components/MainMenu/CreateRoomOverlay';
import JoinRoomOverlay from '../components/MainMenu/JoinRoomOverlay';
//import { render } from 'react-dom';

export default function MainMenu({ navigation }: MainMenuScreenProps) {
    const [createRoomVisible, setCreateRoomVisible] = useState(false);
    const toggleCreateRoomOverlay = () => {
        console.log("pressed toggle")
        setCreateRoomVisible(!createRoomVisible);
    };

    const [joinRoomVisible, setJoinRoomVisible] = useState(false);
    const toggleJoinRoomOverlay = () => {
        console.log("pressed toggle")
        setJoinRoomVisible(!joinRoomVisible);
    };

    const renderCreateRoomOverlay = () => {
        if (createRoomVisible) {
            return (
                <CreateRoomOverlay toggleCreateRoomOverlay={toggleCreateRoomOverlay } navigation={navigation}/>
            )
        }
    }

    const renderJoinRoomOverlay = () => {
        if (joinRoomVisible) {
            return <JoinRoomOverlay onBackdropPress={toggleJoinRoomOverlay}/>
        }
    }
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/galaxy.jpg')} style={styles.imageBackground}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
                        <Image source={require('../../assets/gears_white.png')} style={styles.settingImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AvatarScreen')} >
                        <Image source={require('../../assets/person.png')} style={styles.profileImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/bingo_logo_light.png')} style={styles.logoImage} />
                </View>

                <View style={styles.menuContainer}>
                    <Button raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Vs AI" titleStyle={styles.buttonText}
                    />
                    <Button raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Join Room" onPress={toggleJoinRoomOverlay} titleStyle={styles.buttonText} />

                    <Button raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Create Room" onPress={toggleCreateRoomOverlay} titleStyle={styles.buttonText}
                    />
                    <>{renderCreateRoomOverlay()}</>
                    <>{renderJoinRoomOverlay()}</>
                    <Button raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Online" titleStyle={styles.buttonText}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    topContainer: {
        flex: 1,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuContainer: {
        paddingTop: 50,
        flex: 3,
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%"
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
        fontSize: 18
    },
    logoImage: {
        resizeMode: 'contain',
        width: 300,
        height: 70,
    },
    settingImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    profileImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    overlayContainer: {
        flex: 1,
    },
    overlayStyle:
    {
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        height: "70%",
        width: "80%",
        borderRadius: 30,
    },
    overlayHeading: {
        flex: 1,
    },
    overlayProfile: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginLeft: 20,
    },
    overlayProfileAndText: {
        flexDirection: "row",
    },
    overlayProfileText: {
        marginLeft: 30,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,

    },

    createRoomText:
    {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,
    },
    createLink: {
        flex: 1,
        flexDirection: 'row',
    },
    createLinkText: {
        flex: 2,
    },
    createLinkButton: {
        flex: 1,
    },
    createLinkButtonContainer: {
        backgroundColor: 'blue',
        borderRadius: 50,
    },
    createLinkButtonContainerText: {
        fontSize: 18,
        color: 'white',
    },

    startContainer: {
        flex: 1,
        alignItems: 'center',
        //alignContent:'center',
    },
    startButton: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 250,
        height: 50,

    },
    startButtonText: {
        fontSize: 18,
        color: 'white',
    },
});
