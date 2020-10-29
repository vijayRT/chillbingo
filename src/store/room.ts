import {Room} from 'colyseus.js'
import create from 'zustand'
import {PlayerProfileProps} from '../../types'
import {useColyseusClientStore} from './colyseus'
import {usePlayerStore} from './player'

interface PlayerData {
    name: string
    avatar: string
}
type RoomStore = {
    room?: Room
    sessionId?: string
    players: Array<PlayerProfileProps>
    pressedNumbers: Array<number>
    board: Array<{}>
    createRoom: () => Promise<void>
    playerJoin: (player: PlayerData) => void
    playerLeave: () => void
}
export const useRoomStore = create<RoomStore>((set, get) => ({
    room: undefined,
    sessionId: undefined,
    players: [],
    pressedNumbers: [],
    board: [],
    createRoom: async () => {
        const initializeColyseusClient = useColyseusClientStore.getState().initialize
        initializeColyseusClient()
        const email = usePlayerStore.getState().email
        const client = useColyseusClientStore.getState().client
        const room = await client?.create('bingo_room', {email})
        set({room, sessionId: room?.sessionId, players: room.state.players})
    },
    playerJoin: (player: PlayerData) => {
        const players = get().players
        set({players: [...players, player]})
    },
    playerLeave: () => {
        get().room?.leave()
        set({
            room: undefined,
            sessionId: undefined,
            players: [],
            pressedNumbers: [],
            board: [],
        })
    },
}))
