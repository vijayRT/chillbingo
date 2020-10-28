import create from 'zustand'
import * as Colyseus from 'colyseus.js'

type colysesusClientStore = {
    client?: Colyseus.Client,
    initialize: () => void
}
export const useColyseusClientStore = create<colysesusClientStore>(set => ({
    client: undefined,
    initialize: () : void => {
        const client = new Colyseus.Client('ws://192.168.0.4:2567')
        set({client})
    }
})
)