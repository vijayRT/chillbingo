import React, { useEffect, useRef, useState } from 'react'
import {Icon} from 'react-native-elements'
import { View, Image, TouchableOpacity } from 'react-native'
import { MainMenuScreenProps } from "../../types"
import CreateRoomOverlay from '../components/MainMenu/CreateRoomOverlay';
import JoinRoomOverlay from '../components/MainMenu/JoinRoomOverlay';
import { useThemeStore } from '../store/Themes'
import { ThemedButton,ThemedIcon } from '../components/ThemedComponents'
import Theme, { createStyle } from 'react-native-theming';
import { useSoundStore } from '../store/sounds'
import { useRoomStore } from '../store/room';


export default function MainMenu({ navigation }: MainMenuScreenProps) {
    const setActiveTheme = useThemeStore(state => state.setActiveTheme)
    const activeThemeRef = useRef(useThemeStore.getState().activeTheme)
    useEffect(() => useThemeStore.subscribe(
        activeTheme => (activeThemeRef.current = activeTheme),
        state => state.activeTheme
    ), [])
    const buttonPress = useSoundStore(state => state.buttonPress)
    const createRoom = useRoomStore((state) => state.createRoom)
    
    const changeTheme = () => {
        setActiveTheme('sakura')
        activeThemeRef.current.apply()

    }
    function navigateWithSound(buttonName) {
        buttonPress.play();
        navigation.navigate(buttonName)
    }
    const [createRoomVisible, setCreateRoomVisible] = useState(false);
    const toggleCreateRoomOverlay = async () => {
        buttonPress.play();
        console.log("pressed toggle")
        await createRoom()
        setCreateRoomVisible(!createRoomVisible);
    };

    const [joinRoomVisible, setJoinRoomVisible] = useState(false);
    const toggleJoinRoomOverlay = () => {
        buttonPress.play()
        console.log("pressed toggle")
        setJoinRoomVisible(!joinRoomVisible);
    };

    const renderCreateRoomOverlay = () => {
        if (createRoomVisible) {
            return (
                <CreateRoomOverlay toggleCreateRoomOverlay={toggleCreateRoomOverlay} navigation={navigation} />
            )
        }
    }

    const renderJoinRoomOverlay = () => {

        if (joinRoomVisible) {

            return <JoinRoomOverlay onBackdropPress={toggleJoinRoomOverlay} />
        }
    }

    return (

        <View style={styles.screen}>
            <Theme.ImageBackground source={'@backgroundImage'} style={styles.imageBackground}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigateWithSound("ProfileScreen")} >
                        <Image source={require('../../assets/gintoki.png')} style={styles.profileScreenImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateWithSound("AvatarScreen")} >
                        <ThemedIcon size= {50} iconStyle={styles.shopIcon} name='shopping-cart'/>
                    </TouchableOpacity>
                </View>

                <View style={styles.logoContainer}>

                    <Theme.Text style={styles.logoText1}  >CHILL</Theme.Text><Theme.Text style={styles.logoText2}>BINGO</Theme.Text>
                </View>

                <View style={styles.menuContainer}>
                    <ThemedButton raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Toggle Theme" titleStyle={styles.buttonText} onPress={() => changeTheme()}
                    />
                    <ThemedButton raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Vs AI" onPress={() => navigateWithSound("VsAI")} titleStyle={styles.buttonText}
                    />
                    <ThemedButton raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Join Room" onPress={toggleJoinRoomOverlay} titleStyle={styles.buttonText} />

                    <ThemedButton raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Create Room" onPress={toggleCreateRoomOverlay} titleStyle={styles.buttonText}
                    />
                    <>{renderCreateRoomOverlay()}</>
                    <>{renderJoinRoomOverlay()}</>
                    <ThemedButton raised containerStyle={styles.buttonContainer} buttonStyle={styles.button}
                        title="Online" onPress={() => navigateWithSound("Online")} titleStyle={styles.buttonText}
                    />
                </View>
            </Theme.ImageBackground>
        </View>
    );
}

const styles = createStyle({
    screen: {
        flex: 1,

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
        justifyContent: 'center',
    },
    menuContainer: {
        paddingTop: 50,
        flex: 3,
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
        // resizeMode: 'center',
    },
    button: {
        width: 230,
        height: 57,
        backgroundColor: '@backgroundColor',
        borderRadius: 10,


    },
    buttonContainer: {
        margin: 10,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: '@fontFamily'
    },
    logoImage: {
        resizeMode: 'contain',
        width: 300,
        height: 70,
    },
    profileScreenImage: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        borderRadius:20

    },
    profileImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    shopIcon:{
        color:'@overlayTextColor',
    
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
    logoText1: {
        fontSize: 70,
        fontFamily: '@fontFamily',
        color: '@logoColor1',
    },
    logoText2: {
        fontSize: 70,
        fontFamily: '@fontFamily',
        color: '@logoColor2',

    }
});
