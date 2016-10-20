import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet
} from 'react-native';


const Banner = () => (
  <Image
    source={{uri: 'https://preview.tido-music.com/promo.png'}}
    style={styles.bannerImage}
  >
    {/* <Text style={styles.title}>Piano Masterworks</Text> */}
  </Image>
);

export default Banner;

const styles = StyleSheet.create({
  bannerImage: {
    // height: null,
    // width: null,
    flex:1
  },
  title: {
    color: 'white',
  }
});
