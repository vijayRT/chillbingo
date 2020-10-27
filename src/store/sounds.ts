import Sound from 'react-native-sound'
import create from 'zustand'

type soundStore = {
    buttonPress: Sound,
    backgroundMusic: Sound
}
export const useSoundStore = create<soundStore>(set => ({
    buttonPress: new Sound('button1.mp3', Sound.MAIN_BUNDLE),
    backgroundMusic: new Sound('mixkitlifesmovie.mp3', Sound.MAIN_BUNDLE)
}))