import React from 'react'
import { View, Image} from 'react-native';
import { AvatarScreenProps } from "../../types"
import Theme, { createStyle } from 'react-native-theming';
import ThemeCarousel from '../components/ShopScreen/ThemeCarousel'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabBar from '../components/ShopScreen/TabBar' 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSoundStore } from '../store/sounds'
import {ThemedIcon} from '../components/ThemedComponents'

export default function AvatarScreen({ navigation }: AvatarScreenProps){
    const Tab = createMaterialTopTabNavigator();
    const buttonPress = useSoundStore(state => state.buttonPress)
    function navigateWithSound(buttonName) {
        buttonPress.play();
        navigation.navigate(buttonName)
    }
    return(
<Theme.ImageBackground source='@backgroundImage' style={styles.imageBackground}>
<View style={styles.topContainer}>
    <TouchableOpacity onPress={() => navigateWithSound("MainMenu")}>
    <ThemedIcon size= {50} iconStyle={styles.backIcon} name='reply'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
    <NavigationContainer independent={true}>
      <Tab.Navigator sceneContainerStyle={styles.tabView} swipeEnabled={false} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Themes" component={ThemeCarousel} />
      <Tab.Screen name="Avatars" component={ThemeCarousel} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
    </Theme.ImageBackground>
    )
}
const styles = createStyle({

    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    tabContainer:{
        flex:6
    },
    tabView:{
        backgroundColor:'transparent'
    },
    topContainer: {
        flex: 1,
        marginRight: 10,
        marginTop: 30,
        alignItems: 'flex-end',



    },
    backIcon: {
        color:"@overlayTextColor"
    },
})