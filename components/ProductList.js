import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const ProductListItem = ({ title, composer }) => (
  <View>
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
