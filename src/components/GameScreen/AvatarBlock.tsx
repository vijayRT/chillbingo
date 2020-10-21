import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function AvatarBlock() {
    return (

        <View style={styles.avatarBlock}>
            <View style={styles.avatarContainer}>
                <View style={styles.winContainer}>
                    <View style={styles.emptyFlex}>
                    </View>
                    <View style={styles.winContainerMain}>
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <View style={styles.winIndicator} />
                    </View>
                </View>
                <Image style={styles.avatar} source={require('../../../assets/gintoki.png')} />
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.winContainer}>
                    <View style={styles.emptyFlex}>
                    </View>
                    <View style={styles.winContainerMain}>
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <View style={styles.winIndicator} />
                    </View>
                </View>
                <Image style={styles.avatar} source={require('../../../assets/kazuma.png')} />
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.winContainer}>
                    <View style={styles.emptyFlex}>
                    </View>
                    <View style={styles.winContainerMain}>
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <View style={styles.winIndicator} />
                    </View>
                </View>
                <Image style={styles.avatar} source={require('../../../assets/saiki.jpg')} />
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.winContainer}>
                    <View style={styles.emptyFlex}>
                    </View>
                    <View style={styles.winContainerMain}>
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <Image style={styles.winIndicator} source={require('../../../assets/samuraihelmetnobg.png')} />
                        <View style={styles.winIndicator} />
                    </View>
                </View>
                <Image style={styles.avatar} source={require('../../../assets/subaru.png')} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    avatarBlock: {
        flex: 1,
        flexDirection: 'row',
    },
    avatar: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        margin: 2,
        flex: 3
    },
    winIndicator: {
        borderRadius: 100,
        // backgroundColor: 'yellow',
        // borderColor: 'black',
        flex: 3,
        aspectRatio: 1,
        margin: 2,
        resizeMode: 'contain'
    },
    avatarContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    emptyFlex: {
        flex: 7,
    },
    winContainer: {
        flexDirection: 'column',
        flex: 1,
        margin: 2,
        width: 60,
        height: 60,

    },
    winContainerMain: {
        flexDirection: 'row',
        flex: 1
    }

})