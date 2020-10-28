import React, { useState } from 'react'
import { Button,  Overlay, Text, Input } from 'react-native-elements'
import { StyleSheet, View, Clipboard, TextInput, Image} from 'react-native'
import { MainMenuScreenProps } from "../../../types"
import Theme, { createStyle } from 'react-native-theming';
import { ThemedButton, ThemedOverlay } from '../ThemedComponents'



export default function JoinRoomOverlay({ onBackdropPress }) {

    // const [copiedText, setCopiedText] = useState('')


    // const fetchCopiedText = async () => {
    //     const text = await Clipboard.getString()
    //     setCopiedText(text)
    // }

    return (
        <ThemedOverlay isVisible={true} overlayStyle={styles.overlayStyle} onBackdropPress={onBackdropPress}>
            <View style={styles.overlayContainer}>
                <View style={styles.overlayHeading}>
                    <Theme.Text style={styles.JoinRoomText}>Join Room</Theme.Text>
                </View>

                <View style={styles.overlayProfile} >
                    <View style={styles.overlayProfileAndText}>
                        <Image source={require('../../../assets/person.png')} style={styles.profileImage} />
                        <Theme.Text style={styles.overlayProfileText}>Shadow</Theme.Text>
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
                   < View style={styles.waitingContainer}>
                        <Theme.Text style={styles.waitingText}>Waiting for host to start . . .</Theme.Text>
                    </View>
                    <View style={styles.leaveContainer}>
                    
                        <ThemedButton buttonStyle={styles.leaveButton}
                            title="Leave Game" titleStyle={styles.leaveButtonText} />
                    </View>
                    </View>
                </View>
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
                justifyContent: 'center',
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
        fontFamily:'@fontFamily'

    },

    JoinRoomText:
            {
                color: '@overlayTextColor',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 26,
        fontFamily: '@fontFamily'
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
    waitingContainer: {
        flex: 1,
        //alignItems: 'center',
},
    waitingText: {
        color: '@overlayTextColor',
        marginTop: 10,
        // textAlign: 'center',
        fontSize: 16,
        fontFamily: '@fontFamily'
    },
    startButtonText: {
                fontSize: 18,
                fontFamily:'@fontFamily',
                color: '@textColor',
    },
    leaveContainer: {
        flex: 1,
        //alignItems: 'center',
},
    leaveButton: {
    backgroundColor: '@backgroundColor',
borderRadius: 10,
width: 140,
//height: 50,

},
leaveButtonText: {
        fontSize: 18,
color: '@textColor',
fontFamily:'@fontFamily'
},
});
