import React, { useState } from 'react'
import { Button, Image, Overlay, Text, Input } from 'react-native-elements'
import { StyleSheet, View, Clipboard, TextInput } from 'react-native'
import { MainMenuScreenProps } from "../../../types"


export default function JoinRoomOverlay({ onBackdropPress }) {

    // const [copiedText, setCopiedText] = useState('')


    // const fetchCopiedText = async () => {
    //     const text = await Clipboard.getString()
    //     setCopiedText(text)
    // }

    return (
        <Overlay isVisible={true} overlayStyle={styles.overlayStyle} onBackdropPress={onBackdropPress}>
            <View style={styles.overlayContainer}>
                <View style={styles.overlayHeading}>
                    <Text style={styles.JoinRoomText}>Join Room</Text>
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

                {/* Join Link Here */}
                <View style={styles.JoinLink}>
                    <View style={styles.JoinLinkText}>
                        <Input>
                            <Text 
                            // onPress={() => fetchCopiedText()}
                            >Hello</Text>
                        </Input>


                    </View>

                    {/* <View style={styles.JoinLinkButton}>
                        <Button buttonStyle={styles.JoinLinkButtonContainer}
                            title="Copy" titleStyle={styles.JoinLinkButtonContainerText}  />
                        </View> */}
                    </View>

                    {/* Start Game Button */}
                    <View style={styles.bottomContainer}>
                    <View style={styles.startContainer}>
                        <Button buttonStyle={styles.startButton}
                        disabled
                            title="Start Game" titleStyle={styles.startButtonText} />
                    </View>
                    <View style={styles.leaveContainer}>
                        <Button buttonStyle={styles.leaveButton}
                            title="Leave Game" titleStyle={styles.leaveButtonText} />
                    </View>
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

    JoinRoomText:
            {
                color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,
    },
    JoinLink: {
                flex: 1,
        flexDirection: 'row',
    },
    JoinLinkText: {
                flex: 2,
    },
    JoinLinkButton: {
                flex: 1,
    },
    JoinLinkButtonContainer: {
                backgroundColor: 'blue',
        borderRadius: 50,
    },
    JoinLinkButtonContainerText: {
                fontSize: 18,
        color: 'white',
    },

    bottomContainer: {
                flex: 2,
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection:'column',
        //alignContent:'center',
    },
    startContainer: {
        flex: 1,
        //alignItems: 'center',
},
    startButton: {
                backgroundColor: 'blue',
        borderRadius: 50,
        width: 250,
        //height: 50,

    },
    startButtonText: {
                fontSize: 18,
        color: 'white',
    },
    leaveContainer: {
        flex: 1,
        //alignItems: 'center',
},
    leaveButton: {
        backgroundColor: 'blue',
borderRadius: 50,
width: 120,
//height: 50,

},
leaveButtonText: {
        fontSize: 18,
color: 'white',
},
});
