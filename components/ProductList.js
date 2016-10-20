import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


const ProductListItem = ({ title, composer, coverImage }) => (
  <View>
    <Image source={{uri: `https://store.tido-music.com${coverImage.url}`}}
      style={{width: 50, height: 50}}
    />
    <Text>{title}</Text>
    <Text>{composer}</Text>
  </View>
);


const ProductList = ({ products }) => {
  if (!products.length) {
    return <Text>No products loaded yet</Text>
  }

  return (
    <View>
      {products.map(product => (<ProductListItem key={product.id} {...product} />))}
    </View>
  )
}

export default ProductList;
