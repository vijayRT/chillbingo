import React, { useEffect, useRef, useState } from 'react'
import {Icon} from 'react-native-elements'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { ThemedButton,ThemedIcon } from '../ThemedComponents'
import Theme, { createStyle } from 'react-native-theming';

export default function TabBar({ navigation }) {
    return (
        <View style={styles.tabBar}>
      <ThemedButton
        title="Themes"
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
        onPress={() => {
          navigation.navigate('Themes');
        }}
      />
      <ThemedButton
      title="Avatars"
      buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
      onPress={() => {
        navigation.navigate('Avatars');
      }}
    />
    </View>
    );
  }
  const styles = createStyle({
      tabBar:{
          flexDirection:'row',
        //   flex:1,
          justifyContent:'space-around',
          marginBottom:20        
      },
      buttonStyle:{
            backgroundColor: '@backgroundColor'
      },
      buttonText:{
          fontFamily:'@fontFamily',
          color:'@textColor'
      }
  })