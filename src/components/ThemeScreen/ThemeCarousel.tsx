import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';
 
import SwiperFlatList from 'react-native-swiper-flatlist';
// import Theme,{  createStyle} from 'react-native-theming';
import Theme,{  createStyle} from 'react-native-theming';
 
export default function ThemeCarousel() {

    return (
        <SwiperFlatList
          index={0}
          showPagination
        >
            <Image style={styles.carouselImage} source={require('../../../assets/gintoki.png')}></Image>
            <Image style={styles.carouselImage} source={require('../../../assets/kazuma.png')}></Image>
            <Image style={styles.carouselImage} source={require('../../../assets/saiki.jpg')}></Image>
    
        </SwiperFlatList>
    );
  }
 
export const { width, height } = Dimensions.get('window');
const styles = createStyle({
carousel:{
  flex:2
},
carouselImage:{
  width:300,
  height:300,
  resizeMode:'contain',margin:10
}



})
 