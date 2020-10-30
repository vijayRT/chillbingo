import {Room} from 'colyseus.js'
import create from 'zustand'
import {PlayerProfileProps} from '../../types'
import {useColyseusClientStore} from './colyseus'
import {usePlayerStore} from './player'
import {Reflection} from '@colyseus/schema'
import { BingoRoomState } from '../schema/BingoRoomState'
interface PlayerData {
    name: string
    avatar: string
}
type RoomStore = {
    room?: Room<BingoRoomState>
    sessionId?: string
    createRoom: () => Promise<void>
    playerLeave: () => void
}
export const useRoomStore = create<RoomStore>((set, get) => ({
    room: undefined,
    sessionId: undefined,
    createRoom: async () => {
        const initializeColyseusClient = useColyseusClientStore.getState().initialize
        initializeColyseusClient()
        const email = usePlayerStore.getState().email
        const client = useColyseusClientStore.getState().client
        if (client) {
            const room: Room<BingoRoomState> = await client?.create('bingo_room', {email})
            set({room, sessionId: room?.sessionId})
        }
    },
    playerLeave: () => {
        get().room?.leave()
        set({
            room: undefined,
            sessionId: undefined
        })
    },
}))
