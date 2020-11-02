import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage'
import create from 'zustand'
import { configurePersist } from 'zustand-persist'
import axios from 'axios'
import {API_URL} from '@env'

GoogleSignin.configure({
    scopes: ['profile', 'email'],
    webClientId: '29324035126-hdd4a8uelaju6rprjhonbigp82llpard.apps.googleusercontent.com'
});

const { persist, purge } = configurePersist({
    storage: AsyncStorage, // use `AsyncStorage` in react native
    rootKey: 'root',
})
type User = {
    name?: string
    avatar?: string
    coins?: number
}
type UserStore = {
    email?: string
    isAuthenticating: boolean
    isAuthenticated: undefined
    user: User
    login: () => Promise<void>
    
}
export const useUserStore = create(
    persist({
        key: 'auth', // required, child key of storage
        allowlist: ['isAuthenticated', 'email'], // optional, will save everything if allowlist is undefined
        denylist: [], // optional, if allowlist set, denylist will be ignored
    }, (set, get) => ({
        email: undefined,
        isAuthenticating: false,
        isAuthenticated: false,
        user: undefined,
        login: async () => {
            const isAuthenticated = get().isAuthenticated
            if (!isAuthenticated) {
                set({ isAuthenticating: true })
                const { idToken } = await GoogleSignin.signIn();
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                const userCredentialSignIn = await auth().signInWithCredential(googleCredential)
                const email = userCredentialSignIn.user.email
                set({email, isAuthenticated: true, isAuthenticating: false})
            } else {
                const email = get().email
                const userFromFireStore = await axios.post(`${API_URL}/users`, {email}).catch(error => error as Error)
                if (userFromFireStore instanceof Error) {
                    set({isAuthenticating: false})
                } else {
                    (userFromFireStore.data)
                    set({
                        isAuthenticated: true,
                        isAuthenticating: false,
                        user: userFromFireStore.data
                    })
                }
            }
        }
    })
))