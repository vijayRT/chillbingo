import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage'
import create from 'zustand'
import { configurePersist } from 'zustand-persist'
import axios from 'axios'

GoogleSignin.configure({
    scopes: ['profile', 'email'],
    webClientId: '29324035126-hdd4a8uelaju6rprjhonbigp82llpard.apps.googleusercontent.com'
});

const { persist, purge } = configurePersist({
    storage: AsyncStorage, // use `AsyncStorage` in react native
    rootKey: 'root',
})

export const usePlayerStore = create(
    persist({
        key: 'auth', // required, child key of storage
        allowlist: ['isAuthenticated', 'user', 'email'], // optional, will save everything if allowlist is undefined
        denylist: [], // optional, if allowlist set, denylist will be ignored
    }, (set) => ({
        email: undefined,
        isAuthenticating: false,
        isAuthenticated: false,
        user: undefined,
        login: async () => {
            set((state) => ({ isAuthenticating: true }))
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const userCredentialSignIn = await auth().signInWithCredential(googleCredential)
            const email = userCredentialSignIn.user.email
            const userFromFireStore = await axios.post('http://192.168.0.13:2567/signin', {email})
            console.log(userFromFireStore.data)
            set((state) => ({
                isAuthenticated: true,
                isAuthenticating: false,
                email,
                user: userFromFireStore.data
            }))
        }
    })
))