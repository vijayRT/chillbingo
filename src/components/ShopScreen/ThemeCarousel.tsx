import React, { useEffect, useRef, useState } from 'react'
import { Image, View, Text } from 'react-native'
import Theme ,{ createStyle } from 'react-native-theming';
import Swiper from 'react-native-swiper'
import { useThemeStore } from '../../store/Themes'
import { ThemedButton, ThemedOverlay,ThemedIcon } from '../ThemedComponents'
import { useUserStore } from '../../store/user'

export default function ThemeCarousel() {

  const playerDetails = useUserStore(state => state.user)
  let themeArray = ['neonCity', 'sakura', 'chumma']
  const [themeIndex, setThemeIndex] = useState(0);
  const [buttonName, setButtonName] = useState('Equip')
  const [visible,setVisible] =useState(false)
  const setActiveTheme = useThemeStore(state => state.setActiveTheme)
  const activeThemeRef = useRef(useThemeStore.getState().activeTheme)
  useEffect(() => useThemeStore.subscribe(
    activeTheme => (activeThemeRef.current = activeTheme),
    state => state.activeTheme
  ), [])
  const toggleOverlay = () => {
    setVisible(!visible);
};
  function indexChange(index) {
    setThemeIndex(index)
    if (playerDetails.ownedThemes.includes(themeArray[index])) {
      setButtonName('Equip')
    }
    else {
      setButtonName('Purchase')
    }
  }
  function setTheme(name) {
    if (name == 'Equip') {
      setActiveTheme(themeArray[themeIndex])
      activeThemeRef.current.apply()
    }
    else {
      setVisible(true)
    }

  }
  function nextArrow() {
    return (
      <View style={styles.arrowContainer}>
          <ThemedIcon size= {50} iconStyle={styles.arrowIcon} name='chevron-right'/>
      </View>
    )
  }
  function previousArrow() {
    return (
      <View style={styles.arrowContainer}>
         <ThemedIcon size= {50} iconStyle={styles.arrowIcon} name='chevron-left'/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Swiper
          showsButtons={true}
          dotColor='white'
          activeDotColor='purple'
          nextButton={nextArrow()}
          prevButton={previousArrow()}
          containerStyle={styles.carousel}
          onIndexChanged={(index) => indexChange(index)}
        >
          <View style={styles.imageContainer}>

            <Image style={styles.carouselImage} source={require('../../../assets/neoncity.jpg')}></Image>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.carouselImage} source={require('../../../assets/cherryblossom.jpg')}></Image>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.carouselImage} source={require('../../../assets/saiki.jpg')}></Image>
          </View>


        </Swiper>
        <ThemedOverlay overlayStyle={styles.overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay} >
        <Theme.Text style={styles.overlayText}>You do not have enough Coins. Play games to earn coins.</Theme.Text>
        </ThemedOverlay>
      </View>

      <View style={styles.menuContainer}>
        <ThemedButton buttonStyle={styles.button}
          title={buttonName} titleStyle={styles.buttonText}
          onPress={() => setTheme(buttonName)}
        />
      </View>
    </View>
  )
}
const styles = createStyle({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
  carouselContainer: {
    flex: 5,
    // alignItems: 'center',
    justifyContent: 'center'

  },
  carouselImage: {
    width: 250,
    height: 400,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  arrow: {
    width: 40,
    height: 40,
    marginBottom: 90
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

  overlayStyle:
  {

    backgroundColor: 'black',
    height: "20%",
    width: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white'
  },
  overlayText:
  {
    color: '@overlayTextColor',
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: '@fontFamily'

  },
  arrowIcon:{
    color:'@overlayTextColor'
  }


})
