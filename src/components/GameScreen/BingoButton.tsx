import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import {  createStyle} from 'react-native-theming';
import {ThemedButton} from '../ThemedButton'

export interface BingoButtonProps {
  displayedValue: string,
  // arrayIndex: number
}
export default function BingoButton(props: BingoButtonProps) {
  
  const [activeBtn, setActiveBtn] = useState(2);
  return (
    <View style={styles.buttonContainer}>
      <ThemedButton buttonStyle={styles.buttonColor} containerStyle={[styles.button, { zIndex: activeBtn }]}
        title={props.displayedValue} titleStyle={styles.button_text}
        onPress={() => setActiveBtn(activeBtn - 1)}
      />
      <View style={styles.strike}>
        <></>
      </View>
    </View>
  )
}

const styles = createStyle({
  button: {
    flex: 1,
    backgroundColor: '@backgroundColor',
    justifyContent: 'center',
    margin: 3,
    aspectRatio: 1,
    borderRadius: 5,
    zIndex: 2
  },
  buttonColor: {
    backgroundColor: '@backgroundColor',
  },
  button_text: {
    fontSize: 24,
    fontFamily: '@fontFamily',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1,
  },
  strike: {

    position: 'absolute',
    transform: [{ rotate: '25deg' }],
    zIndex: 1,
    // height:10,
    width: 30,
    borderColor: 'red',
    borderWidth: 3,
    alignSelf: 'center'
  },

});