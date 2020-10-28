import {ThemedButton, ThemedOverlay} from '../ThemedComponents'
import React, {useEffect, useState} from 'react'
import {Button, Overlay, Text, Input} from 'react-native-elements'
import {StyleSheet, View, Clipboard, TextInput, Image} from 'react-native'
import Theme, {createStyle} from 'react-native-theming'
import {GameScreenProps, PlayerProfileProps} from '../../../types'
import {useColyseusClientStore} from '../../store/colyseus'
import {useRoomStore} from '../../store/room'
import RoomPlayerProfile from './RoomPlayerProfile'

export default function CreateRoomOverlay({
    toggleCreateRoomOverlay,
    navigation,
}: GameScreenProps) {
    const [copiedText, setCopiedText] = useState('')
    const room = useRoomStore((state) => state.room)
    const playerJoin = useRoomStore((state) => state.playerJoin)
    const players = useRoomStore((state) => state.players)
    useEffect(() => {
        room?.onMessage('playerJoined', (message) => playerJoin(message))
    }, [room])
    const fetchCopiedText = async () => {
        const text = await Clipboard.getString()
        setCopiedText(text)
    }
    const createRoomHandler = async () => {
    }
    const startGame = () => {
        toggleCreateRoomOverlay()
        navigation.navigate('GameScreen')
    }
    const renderPlayerProfile = (player: PlayerProfileProps) => {
        return <RoomPlayerProfile name={player.name} avatar={player.avatar} />
    }
    return (
        <ThemedOverlay
            isVisible={true}
            overlayStyle={styles.overlayStyle}
            onBackdropPress={toggleCreateRoomOverlay}
        >
            <Theme.View style={styles.overlayContainer}>
                <View style={styles.overlayHeading}>
                    <Theme.Text style={styles.createRoomText}>
                        Create Room
                    </Theme.Text>
                </View>
                <View style={styles.overlayProfile}>
                {players.map((player) => {
                    return renderPlayerProfile(player)
                })}
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
                <View style={styles.startContainer}>
                    <ThemedButton
                        buttonStyle={styles.startButton}
                        title="Start Game"
                        titleStyle={styles.startButtonText}
                        onPress={() => {
                            startGame()
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
        color: '@textColor',
        fontFamily: '@fontFamily',
    },
})
