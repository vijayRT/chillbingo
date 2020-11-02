import create from 'zustand'
import * as Colyseus from 'colyseus.js'
import {GAME_SERVER_URL} from '@env'
type colysesusClientStore = {
    client?: Colyseus.Client,
    initialize: () => void
}
export const useColyseusClientStore = create<colysesusClientStore>(set => ({
    client: undefined,
    initialize: () : void => {
        const client = new Colyseus.Client(GAME_SERVER_URL)
        set({client})
    }
})
)