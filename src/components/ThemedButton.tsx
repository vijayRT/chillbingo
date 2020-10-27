import {createThemedComponent } from 'react-native-theming';
import { Button } from 'react-native-elements';
export const ThemedButton = createThemedComponent(Button,['buttonStyle','titleStyle','containerStyle'])