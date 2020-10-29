import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack'

type RootStackParamList = {
    MainMenu: undefined
    ProfileScreen: undefined
    GameScreen: undefined
    AvatarScreen: undefined
}
export type MainMenuScreenProps = StackScreenProps<
    RootStackParamList,
    'MainMenu'
>
export type ProfileScreenProps = StackScreenProps<
    RootStackParamList,
    'ProfileScreen'
>
export type GameScreenProps = StackScreenProps<RootStackParamList, 'GameScreen'>
export type AvatarScreenProps = StackScreenProps<
    RootStackParamList,
    'AvatarScreen'
>

export type PlayerProfileProps = {
    name: string
    avatar: string
}
export type overlayProps = {
    overlayVisible: false,
    setOverlayVisible: (overlayVisibility: boolean) => React.Dispatch<React.SetStateAction<boolean>>,
    navigation: StackNavigationProp<RootStackParamList, "MainMenu">
}