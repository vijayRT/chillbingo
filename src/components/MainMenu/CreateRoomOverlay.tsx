import React, { useState } from 'react'
import { Button, Overlay, Text, Input } from 'react-native-elements'
import { StyleSheet,  Image,View, Clipboard, TextInput } from 'react-native'
import { GameScreenProps } from "../../../types"
import Theme, { createStyle } from 'react-native-theming';
import { ThemedButton, ThemedOverlay } from '../ThemedComponents'

export default function CreateRoomOverlay({ toggleCreateRoomOverlay, navigation }: GameScreenProps) {

    const [copiedText, setCopiedText] = useState('')


    const fetchCopiedText = async () => {
        const text = await Clipboard.getString()
        setCopiedText(text)
    }

    return (
        <ThemedOverlay isVisible={true} overlayStyle={styles.overlayStyle} onBackdropPress={toggleCreateRoomOverlay}>
            <Theme.View style={styles.overlayContainer}>
                <View style={styles.overlayHeading}>
                    <Theme.Text style={styles.createRoomText}>Create Room</Theme.Text>
                </View>

                <View style={styles.overlayProfile} >
                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Theme.Text style={styles.overlayProfileText}>Shadow</Theme.Text>
                    </View>

                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Theme.Text style={styles.overlayProfileText}>Kyoma</Theme.Text>
                    </View>

                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Theme.Text style={styles.overlayProfileText}>KronosFear</Theme.Text>
                    </View>

                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Theme.Text style={styles.overlayProfileText}>OppaiLover</Theme.Text>
                    </View>

                </View>

                {/* Create Link Here */}
                <View style={styles.createLink}>
                    <View style={styles.createLinkText}>
                        <Input>
                            <Text onPress={() => fetchCopiedText()}>Hello</Text>
                        </Input>


                    </View>

                    {/* <View style={styles.createLinkButton}>
                        <Button buttonStyle={styles.createLinkButtonContainer}
                            title="Copy" titleStyle={styles.createLinkButtonContainerText}  />
                        </View> */}
                    </View>

                    {/* Start Game Button */}

                    <View style={styles.startContainer}>
                        <ThemedButton buttonStyle={styles.startButton}
                            title="Start Game" titleStyle={styles.startButtonText} onPress={() => {toggleCreateRoomOverlay() 
                                navigation.navigate('GameScreen')
                            }} />
                    </View>
                </Theme.View>
            </ThemedOverlay>
    );
}
const styles = createStyle({
                overlayContainer: {
                flex: 1,
    },
    profileImage: {
                resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    overlayStyle:
            {
            backgroundColor: '@overlayColor',
        height: "85%",
        width: "80%",
        borderRadius: 30,
        borderColor:'white',
        borderWidth:2
    },
    overlayHeading: {
                flex: 1,
                justifyContent:'center'
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
        color: '@overlayTextColor',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,
        fontFamily:'@fontFamily'

    },

    createRoomText:
            {
                color: '@overlayTextColor',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 26,
        fontFamily:'@fontFamily'
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
                backgroundColor: '@backgroundColor',
        borderRadius: 10,
        width: 250,
        height: 50,

    },
    startButtonText: {
                fontSize: 18,
        color: 'white',
        fontFamily:'@fontFamily'
    },
});
