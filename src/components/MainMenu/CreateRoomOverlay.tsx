import {ThemedButton, ThemedOverlay} from '../ThemedComponents'
import React, {useEffect, useState} from 'react'
import {Button, Overlay, Text, Input} from 'react-native-elements'
import {StyleSheet, View, Clipboard, TextInput, Image} from 'react-native'
import Theme, {createStyle} from 'react-native-theming'
import {GameScreenProps, overlayProps, PlayerProfileProps} from '../../../types'
import {useColyseusClientStore} from '../../store/colyseus'
import {useRoomStore} from '../../store/room'
import RoomPlayerProfile from './RoomPlayerProfile'
import { Player } from '../../schema/Player'

export default function CreateRoomOverlay({overlayVisible, setOverlayVisible, navigation}: overlayProps) {
    const [copiedText, setCopiedText] = useState('')
    const room = useRoomStore((state) => state.room)
    const [playerProfiles, setPlayerProfile] = useState([] as JSX.Element[])
    const playerLeave = useRoomStore(state => state.playerLeave)
    useEffect(() => {
        room.state.players.onAdd = (player, key) => {
            setPlayerProfile([...playerProfiles, <RoomPlayerProfile name={player.name} avatar={player.avatar} />])
        }
    }, [room])

    const startGame = () => {
        setOverlayVisible(false)
        navigation.navigate('GameScreen')
    }
    const leaveGame = () => {
        playerLeave()
        setOverlayVisible(false)
    }
    return (
        <ThemedOverlay
            isVisible={overlayVisible}
            overlayStyle={styles.overlayStyle}
        >
            <Theme.View style={styles.overlayContainer}>
                <View style={styles.overlayHeading}>
                    <Theme.Text style={styles.createRoomText}>
                        Create Room
                    </Theme.Text>
                </View>
                <View style={styles.overlayProfile}>
                {playerProfiles}
                </View>
                {/* Create Link Here */}
                <View style={styles.createLink}>
                    <View style={styles.createLinkText}>
                        <Input>
                            <Text onPress={() => fetchCopiedText()}>Hello</Text>
                        </Input>
                    </View>
                </View>
                {/* Start Game Button */}
                <View style={styles.startAndLeaveButtonContainer}>
                    <ThemedButton
                        buttonStyle={styles.startButton}
                        title="Start Game"
                        titleStyle={styles.startButtonText}
                        onPress={() => {
                            startGame()
                        }}
                    />
                    <ThemedButton
                        buttonStyle={styles.leaveRoomButton}
                        title="Leave Game"
                        titleStyle={styles.startButtonText}
                        onPress={() => {
                            leaveGame()
                        }}
                    />
                </View>
            </Theme.View>
        </ThemedOverlay>
    )
}
const styles = createStyle({
    overlayContainer: {
        flex: 1,
    },
    overlayStyle: {
        backgroundColor: '@overlayColor',
        height: '85%',
        width: '80%',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2,
    },
    overlayHeading: {
        flex: 1,
        justifyContent: 'center',
    },
    overlayProfile: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 20,
    },
    createRoomText: {
        color: '@overlayTextColor',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 26,
        fontFamily: '@fontFamily',
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

    startAndLeaveButtonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    startButton: {
        backgroundColor: '@backgroundColor',
        borderRadius: 10,
        width: 250,
        height: 50,
    },
    startButtonText: {
        fontSize: 18,
        color: '@textColor',
        fontFamily: '@fontFamily',
    },
    leaveRoomButton: {
        backgroundColor: '@backgroundColor',
        borderRadius: 10,
        width: 100,
        height: 30,
    }
})
