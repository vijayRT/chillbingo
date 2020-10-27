import React from 'react'
import { Image, View } from 'react-native'
import { createStyle } from 'react-native-theming';
import Swiper from 'react-native-swiper'

export default function ThemeCarousel() {
  function nextArrow() {
    return (
      <View style={styles.arrowContainer}>
        <Image source={require('../../../assets/rightarrow.png')} style={styles.arrow} />
      </View>
    )
  }
  function previousArrow() {
    return (
      <View style={styles.arrowContainer}>
        <Image source={require('../../../assets/leftarrow.png')} style={styles.arrow} />
      </View>
    )
  }
  return (
    <Swiper showsButtons={true} dotColor='white' activeDotColor='purple' nextButton={nextArrow()} prevButton={previousArrow()} containerStyle={styles.carousel}>
      <View style={styles.imageContainer}>

        <Image style={styles.carouselImage} source={require('../../../assets/cherryblossom.jpg')}></Image>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.carouselImage} source={require('../../../assets/neoncity.jpg')}></Image>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.carouselImage} source={require('../../../assets/saiki.jpg')}></Image>
      </View>


    </Swiper>
  )
}
const styles = createStyle({
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 250,
    height: 400,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 20,
  },
  logo: {
    fontSize: 30,
    fontFamily: 'cherryblossom',
    zIndex: 2
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
  }


})
