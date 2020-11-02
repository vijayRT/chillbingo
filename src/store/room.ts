import {Room} from 'colyseus.js'
import create from 'zustand'
import {useColyseusClientStore} from './colyseus'
import {useUserStore} from './user'
import {BingoRoomState} from '../schema/BingoRoomState'
import dynamicLinks from '@react-native-firebase/dynamic-links'
interface PlayerData {
    name: string
    avatar: string
}
type RoomStore = {
    room?: Room<BingoRoomState>
    sessionId?: string
    roomLink?: string
    joinedWithLink?: boolean
    createRoom: () => Promise<void>
    playerLeave: () => void
    buildRoomLink: () => Promise<void>,
    joinRoom: (roomLink: string) => Promise<void>
}
export const useRoomStore = create<RoomStore>((set, get) => ({
    room: undefined,
    sessionId: undefined,
    roomLink: undefined,
    joinedWithLink: undefined,
    createRoom: async () => {
        const initializeColyseusClient = useColyseusClientStore.getState().initialize
        initializeColyseusClient()
        const email = useUserStore.getState().email
        const client = useColyseusClientStore.getState().client
        if (client) {
            const room: Room<BingoRoomState> = await client?.create(
                'bingo_room',
                {email},
            )
            set({room, sessionId: room?.sessionId})
        }
    },
    buildRoomLink: async () => {
        const room = get().room
        const link = await dynamicLinks().buildShortLink(
            {
                android: {
                    packageName: 'com.yorozuyagames.chillbingo',
                    fallbackUrl: 'https://yorozuyagames.com',
                },
                link: `https://yorozuyagames.com/join/${room?.id}`,
                domainUriPrefix: 'https://yorozuyagames.com/join',
            },
            dynamicLinks.ShortLinkType.SHORT,
        )
        set({roomLink: link})
    },
    joinRoom: async (roomLink: string) => {
        const initializeColyseusClient = useColyseusClientStore.getState().initialize
        initializeColyseusClient()
        const email = useUserStore.getState().email
        const client = useColyseusClientStore.getState().client
        const roomId = roomLink.split('/')[roomLink.split('/').length - 1]
        const room = await client?.joinById<BingoRoomState>(roomId, {email})
        if (room) {
            set({room, roomLink, joinedWithLink: true})
        }
    },
    playerLeave: () => {
        get().room?.leave()
        set({
            room: undefined,
            sessionId: undefined,
            joinedWithLink: undefined,
            roomLink: undefined
        })
    },
}))
