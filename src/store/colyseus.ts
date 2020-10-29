import create from 'zustand'
import * as Colyseus from 'colyseus.js'

type colysesusClientStore = {
    client?: Colyseus.Client,
    initialize: () => void
}
export const useColyseusClientStore = create<colysesusClientStore>(set => ({
    client: undefined,
    initialize: () : void => {
        const client = new Colyseus.Client(process.env.GAME_SERVER_URL)
        set({client})
    }
})
)