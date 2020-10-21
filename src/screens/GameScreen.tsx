/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import BingoBoard from '../components/GameScreen/BingoBoard';
import BingoText from '../components/GameScreen/BingoText';
import CalledNumbers from '../components/GameScreen/CalledNumbers';
import AvatarBlock from '../components/GameScreen/AvatarBlock';
import {GameScreenProps} from '../../types';

export default function GameScreen({}: GameScreenProps) {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={require('../../assets/cherryblossom.jpg')}
        style={styles.imageBg}>
        <AvatarBlock />
        <CalledNumbers />
        <BingoText />
        <BingoBoard />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
