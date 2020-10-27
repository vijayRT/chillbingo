import React from 'react'
import { View, Image } from 'react-native';
import { AvatarScreenProps } from "../../types"
import Theme, { createStyle } from 'react-native-theming';
import { ThemedButton } from '../components/ThemedComponents'
import ThemeCarousel from '../components/ThemeScreen/ThemeCarousel'


export default function AvatarScreen({ navigation }: AvatarScreenProps) {

    return (
        <Theme.ImageBackground source='@backgroundImage' style={styles.imageBackground}>
            <View style={styles.container}>
                {/* Top Container */}
                <View style={styles.topContainer}>
                    <Image source={require('../../assets/gears_white.png')} style={styles.backImage} />
                </View>

                {/* Button Container */}
                <View style={styles.menuContainer}>
                    <ThemedButton buttonStyle={styles.button}
                        title="Themes" titleStyle={styles.buttonText}
                    />
                    <ThemedButton buttonStyle={styles.button}
                        title="Avatars" titleStyle={styles.buttonText}
                    />


                </View>

                <View style={styles.carouselContainer}>
                    <ThemeCarousel />
                </View>

                <View style={styles.menuContainer}>
                    <ThemedButton buttonStyle={styles.button}
                        title="Purchase" titleStyle={styles.buttonText}
                    />

                    <ThemedButton buttonStyle={styles.button}
                        title="Equip" titleStyle={styles.buttonText}
                    />
                </View>

            </View>

        </Theme.ImageBackground>

    );
};

const styles = createStyle({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    topContainer: {
        flex: 1,
        marginRight: 10,
        marginTop: 30,
        alignItems: 'flex-end',

    },
    backImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    button: {
        backgroundColor: '@backgroundColor',

    },

    buttonText: {
        fontSize: 18,
        fontFamily: '@fontFamily'
    },
    profileContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    shopProfile: {

    },
    shopProfileAndText: {
        //flexDirection: "row",
    },
    overlayProfileText: {
        marginLeft: 30,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,

    },
    profileImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    profileImageBigContainer: {
        flex: 3,
        alignItems: 'center',
    },
    profileImageBigSize: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    carouselContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'

    }

});