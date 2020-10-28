import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  MainMenu: undefined;
  Settings: undefined;
  GameScreen: undefined;
  AvatarScreen: undefined;
};
export type MainMenuScreenProps = StackScreenProps<RootStackParamList,'MainMenu'>;
export type SettingsScreenProps = StackScreenProps<
  RootStackParamList,
  'Settings'
>;
export type GameScreenProps = StackScreenProps<
  RootStackParamList,
  'GameScreen'
>;
export type AvatarScreenProps = StackScreenProps<
  RootStackParamList,
  'AvatarScreen'
>;

export type PlayerProfileProps = {
    name: string,
    avatar: string
}