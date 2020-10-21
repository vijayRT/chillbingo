import React, { useState } from 'react'
import { Button, Image, Overlay, Text, Input } from 'react-native-elements'
import { StyleSheet, View, Clipboard, TextInput } from 'react-native'
import { GameScreenProps } from "../../../types"


export default function CreateRoomOverlay({ toggleCreateRoomOverlay, navigation }: GameScreenProps) {

    const [copiedText, setCopiedText] = useState('')


    const fetchCopiedText = async () => {
        const text = await Clipboard.getString()
        setCopiedText(text)
    }

    return (
        <Overlay isVisible={true} overlayStyle={styles.overlayStyle} onBackdropPress={toggleCreateRoomOverlay}>
            <View style={styles.overlayContainer}>
                <View style={styles.overlayHeading}>
                    <Text style={styles.createRoomText}>Create Room</Text>
                </View>

                <View style={styles.overlayProfile} >
                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Text style={styles.overlayProfileText}>Shadow</Text>
                    </View>

                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Text style={styles.overlayProfileText}>Kyoma</Text>
                    </View>

                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Text style={styles.overlayProfileText}>KronosFear</Text>
                    </View>

                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Text style={styles.overlayProfileText}>OppaiLover</Text>
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
                        <Button buttonStyle={styles.startButton}
                            title="Start Game" titleStyle={styles.startButtonText} onPress={() => {toggleCreateRoomOverlay() 
                                navigation.navigate('GameScreen')
                            }} />
                    </View>
                </View>
            </Overlay>
    );
}
const styles = StyleSheet.create({
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
