import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  MainMenu: undefined;
  ProfileScreen: undefined;
  GameScreen: undefined;
  AvatarScreen: undefined;
};
export type MainMenuScreenProps = StackScreenProps<
RootStackParamList,
'MainMenu'>;
export type ProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'ProfileScreen'
>;
export type GameScreenProps = StackScreenProps<
  RootStackParamList,
  'GameScreen'
>;
export type AvatarScreenProps = StackScreenProps<
  RootStackParamList,
  'AvatarScreen'
>;
