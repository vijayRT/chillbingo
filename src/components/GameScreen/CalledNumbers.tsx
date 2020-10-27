import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import {ThemedButton} from '../ThemedButton'
export default function CalledNumbers() {
    return(
        <View style={styles.calledNumbers}>
          <View style={styles.oldNumbers}>
          <ThemedButton buttonStyle={styles.calledNumber} title={'1'} titleStyle={styles.calledNumberText} />
          <ThemedButton buttonStyle={styles.calledNumber} title={'2'} titleStyle={styles.calledNumberText} />
          <ThemedButton buttonStyle={styles.calledNumber} title={'3'} titleStyle={styles.calledNumberText} />

          </View>

          <View style={styles.mainNumber}>
          <ThemedButton buttonStyle={styles.calledNumberMain} title={'4'} titleStyle={[styles.calledNumberText,{fontSize:50}]} />
          </View>
          <View style={styles.emptyFlex}></View>
        </View>
)
}
const styles = StyleSheet.create({
    calledNumbers: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        alignItems:'center'
    
      },
      oldNumbers:{
      flex: 2,
      flexDirection: 'row',
    
      },
      mainNumber:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center'
    
      },
      calledNumberText: {
        fontSize: 24,
        fontFamily: '@fontFamily',
      },
      emptyFlex:{
        flex:2
      },
      calledNumber: {
        flexDirection: 'row',
        width: 40,
        height: 40,
        backgroundColor: '#ff748c',
        margin: 2,
        borderRadius: 50,
      },
      calledNumberMain: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#ff284d',
        margin: 2,
        borderRadius: 50,
    
      },


})