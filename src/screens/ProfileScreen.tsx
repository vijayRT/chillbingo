import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ProfileScreenProps } from "../../types"
import { ThemedButton, ThemedOverlay } from '../components/ThemedComponents'
import Theme, { createStyle } from 'react-native-theming';
import { usePlayerStore } from '../store/player'

export default function ProfileScreen({navigation}: ProfileScreenProps) {
    const playerDetails = usePlayerStore(state => state.user)
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    console.log('inside profile screen:',playerDetails)
    return (
        
        <Theme.ImageBackground source={'@backgroundImage'} style={styles.imageBackground}>
            
            <View style={styles.avatarContainer}>
                    <Image source={require('../../assets/gintoki.png')} style={styles.avatarImage}/>
                </View>
                <View style={styles.playerNameContainer1}>
                <View style={styles.playerNameContainer2}>
    <Theme.Text style={styles.playerName}>{playerDetails.name}</Theme.Text>
                    </View>
                    <View style={styles.coinContainer}>
                    <Theme.Text style={styles.coins}>{playerDetails.coins} Coins</Theme.Text>
                    
                    </View>
                </View>
                <View style={styles.playerDetailsContainer1}>
                <View style={styles.playerDetailsContainer2}>

                <View style={styles.leftDetails}>
                    <Theme.Text style={styles.playerDetails}>Wins</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>Losses</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>Total Games</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>Current Theme</Theme.Text>
                    </View>

                    <View style={styles.middleDetails}>
                    <Theme.Text style={styles.playerDetails}>:</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>:</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>:</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>:</Theme.Text>
                    </View>
                    <View style={styles.rightDetails}>
    <Theme.Text style={styles.playerDetails}>{playerDetails.gameWins}</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>{playerDetails.gameLosses}</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>{playerDetails.gamesPlayed}</Theme.Text>
                    <Theme.Text style={styles.playerDetails}>Neon City</Theme.Text>
                    </View>
                </View>
                </View>

            <View style={styles.menuContainer}>
                <ThemedButton raised containerStyle={styles.buttonContainer} buttonStyle={styles.aboutButton}
                    title="About Us" onPress={toggleOverlay} titleStyle={styles.aboutButtonText} />
                <ThemedOverlay overlayStyle={styles.overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Theme.Text style={styles.overlayText}>This app was created by KronosFear, ShadowGear and Hokyoma.</Theme.Text>
                    <Theme.Text style={styles.overlayText}>Contact dev@yorozuyagames.com for bug reports and issues.</Theme.Text>
                </ThemedOverlay>
            </View>
        </Theme.ImageBackground>
    );
};

const styles =createStyle({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    avatarContainer:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    avatarImage:{
        width:250,
        height:250,
        resizeMode:'contain'
    },
    playerNameContainer1:{
        marginTop:10,
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
    playerNameContainer2:{
        flexDirection:'row',
        justifyContent:'center',
    },
    playerName:{
        fontSize:36,
        fontFamily:'@fontFamily',
        color:'@overlayTextColor'
    },
    coinContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    coins:{
        fontSize:20,
        fontFamily:'@fontFamily',
        color:'@overlayTextColor'
    },
    playerDetailsContainer1:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center'
    },
    playerDetailsContainer2:{
        flexDirection:'row',
        justifyContent:'center'
    },

    leftDetails:{
        justifyContent:'space-evenly'
    },
    middleDetails:{
        justifyContent:'space-evenly'
    },
    rightDetails:{
        justifyContent:'space-evenly'
    },
    playerDetails:{
        fontSize:22,
        fontFamily:'@fontFamily',
        color:'@overlayTextColor',
        marginRight:10

    },
    menuContainer: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    aboutButton: {
        width: 230,
        height: 57,
        backgroundColor: '@backgroundColor',
        borderRadius: 10,
    },
    buttonContainer: {
        margin: 10,
    },
    aboutButtonText: {
        fontSize: 18,
        fontFamily:'@fontFamily'
    },
    overlayStyle:
    {

        backgroundColor: 'black',
        height: "40%",
        width: 350,
        borderRadius: 30,
        borderWidth:2,
        borderColor:'white'
    },
    overlayText:
    {
        color: 'white',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 24,
        fontFamily:'AnnieUseYourTelescope'

    }
});
