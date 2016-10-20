import React, { Component } from 'react';
import { chunk, flow, map } from 'lodash/fp';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';


const ProductListItem = ({ title, composer, coverImage }) => (
  <View style={styles.card}>
    <Image
      source={{uri: `https://store.tido-music.com${coverImage.url}`}}
      style={styles.coverImage}
    />
    <Text style={styles.listItem}>{title}</Text>
    <Text style={styles.listItem}>{composer}</Text>
  </View>
);

const ProductListRow = ({ products }) => (
  <View style={styles.row}>
    {map(product => (<ProductListItem key={product.id} {...product} />), products)}
  </View>
)


const ProductList = ({ products }) => {
  if (!products.length) {
    return <Text>No products loaded yet</Text>
  }

  return (
    <ScrollView style={styles.scrollView}>
      {flow(
        chunk(4),
        map((products, index) => (<ProductListRow key={index} products={products} />))
      )(products)}
    </ScrollView>
  )
}

export default ProductList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#4d237a',
    flex:8
  },
  listItem: {
    color: 'white',
    fontSize: 8
  },
  coverImage: {width: 110, height: 110},
  row: {
    flex:1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  card: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center'
  }
});
