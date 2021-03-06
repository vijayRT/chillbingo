import {createThemedComponent } from 'react-native-theming';
import { Button, Overlay,Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
export const ThemedButton = createThemedComponent(Button,['buttonStyle','titleStyle','containerStyle'])
export const ThemedTouchableOpacity = createThemedComponent(TouchableOpacity)
export const ThemedOverlay = createThemedComponent(Overlay,['overlayStyle'])
export const ThemedIcon = createThemedComponent(Icon,['containerStyle','iconStyle'])