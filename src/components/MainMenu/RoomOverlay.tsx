import {ThemedButton, ThemedOverlay} from '../ThemedComponents'
import React, {useEffect, useState} from 'react'
import {View, TouchableOpacity, Clipboard} from 'react-native'
import Theme, {createStyle} from 'react-native-theming'
import {overlayProps} from '../../../types'
import {useRoomStore} from '../../store/room'
import RoomPlayerProfile from './RoomPlayerProfile'
import Toast from 'react-native-simple-toast'
import { useUserStore } from '../../store/user'
import { Player } from '../../schema/Player'

export default function RoomOverlay({
    overlayVisible,
    mode,
    setOverlayVisible,
    navigation,
}: overlayProps) {
    const room = useRoomStore((state) => state.room)
    const roomLink = useRoomStore((state) => state.roomLink)
    const [playerProfileComponents, setPlayerProfileComponents] = useState(new Map<string, JSX.Element>())
    const playerLeave = useRoomStore((state) => state.playerLeave)
    useEffect(() => {
        room?.state.players.forEach((player) => {
            setPlayerProfileComponents(new Map(playerProfileComponents.set(player.email, <RoomPlayerProfile name={player.name} avatar={player.avatar} />)))
        })
        room.state.players.onAdd = (player, key) => {
            setPlayerProfileComponents(new Map(playerProfileComponents.set(player.email, <RoomPlayerProfile name={player.name} avatar={player.avatar} />)))
        }
        room.state.players.onRemove = (player, key) => {
            console.log("Player Left")
            playerProfileComponents.delete(player.email)
            setPlayerProfileComponents(new Map(playerProfileComponents))
        }
    }, [])
    const renderPlayerProfiles = () => {
        const playerProfileDisplays = [] as JSX.Element[]
        playerProfileComponents.forEach((playerProfileComponent) => {
            playerProfileDisplays.push(playerProfileComponent)
        })
        return playerProfileDisplays
    }
    const copyRoomLinkToClipboard = () => {
        if (roomLink) {
            Clipboard.setString(roomLink)
            Toast.show('Copied room link to clipboard!')
        } else {
            Toast.show("Couldn't copy room link")
        }
    }
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
                        {mode === 'create' ? "Create Room" : "Join Room"}
                    </Theme.Text>
                </View>
                <View style={styles.overlayProfile}>{renderPlayerProfiles()}</View>
                {/* Create Link Here */}
                <View style={styles.createLink}>
                    <TouchableOpacity onPress={() => copyRoomLinkToClipboard()}>
                        <Theme.Text style={styles.createLinkText}>
                            {roomLink}
                        </Theme.Text>
                    </TouchableOpacity>
                </View>
                {/* Start Game Button */}
                <View style={styles.startAndLeaveButtonContainer}>
                    {mode === 'create' ? 
                    <ThemedButton
                        buttonStyle={styles.startButton}
                        title="Start Game"
                        titleStyle={styles.startButtonText}
                        onPress={() => {
                            startGame()
                        }}
                    /> : <Theme.Text style={styles.waitingText}>
                    Waiting for host to start . . .
                </Theme.Text>}
                    
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
        color: '@textColor',
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
        alignItems: 'center',
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
    },
    waitingText: {
        color: '@overlayTextColor',
        marginTop: 10,
        // textAlign: 'center',
        fontSize: 16,
        fontFamily: '@fontFamily',
    }
})
