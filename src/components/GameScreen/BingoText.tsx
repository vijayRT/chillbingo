import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default function BingoText() {
  const [animationType, setAnimationType] = useState('jello');
  const [iteration, setIteration] = useState(1000);
  const [bgColor, setBgColor] = useState('#1f2224');

  function PressTransform() {
    return (
      setIteration(1),
      setBgColor('#f17997')
    )

  }
  return (
    <View style={styles.bingoLetters}>
      <Animatable.View animation={animationType} iterationCount={iteration}  >
        <Button buttonStyle={[styles.bingoLettersButton, { backgroundColor: bgColor }]} title={'B'} titleStyle={styles.bingoLettersTitle} onPress={() => PressTransform()} />
      </Animatable.View>
      <Animatable.View animation={animationType} iterationCount={'infinite'} >
        <Button buttonStyle={styles.bingoLettersButton} title={'I'} titleStyle={styles.bingoLettersTitle} />
      </Animatable.View>
      <Animatable.View animation={animationType} iterationCount={'infinite'} >
        <Button buttonStyle={styles.bingoLettersButton} title={'N'} titleStyle={styles.bingoLettersTitle} />
      </Animatable.View>
      <Animatable.View animation={animationType} iterationCount={'infinite'} >
        <Button buttonStyle={styles.bingoLettersButton} title={'G'} titleStyle={styles.bingoLettersTitle} />
      </Animatable.View>
      <Animatable.View animation={animationType} iterationCount={'infinite'} >
        <Button buttonStyle={styles.bingoLettersButton} title={'O'} titleStyle={styles.bingoLettersTitle} />
      </Animatable.View>
    </View>
  )
}
const styles = StyleSheet.create({
  bingoLetters: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  bingoLettersButton: {
    flexDirection: 'row',
    width: 65,
    height: 65,
    backgroundColor: '#1f2224',
    margin: 2,
    borderRadius: 5,

  },
  bingoLettersTitle: {
    fontSize: 50,
    fontFamily: 'cherryblossom',
  },


})