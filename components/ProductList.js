import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';


const ProductListItem = ({ title, composer, coverImage }) => (
  <View>
    <Image source={{uri: `https://store.tido-music.com${coverImage.url}`}}
      style={{width: 50, height: 50}}
    />
    <Text style={styles.listItem}>{title}</Text>
    <Text style={styles.listItem}>{composer}</Text>
  </View>
);


const ProductList = ({ products }) => {
  if (!products.length) {
    return <Text>No products loaded yet</Text>
  }

  return (
    <ScrollView style={styles.scrollView}>
      {products.map(product => (<ProductListItem key={product.id} {...product} />))}
    </ScrollView>
  )
}

export default ProductList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#4d237a',
    height: 500,
  },
  listItem: {
    color: 'white'
  }
});
