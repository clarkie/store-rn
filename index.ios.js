import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  AlertIOS
} from 'react-native';
import axios from 'axios';
import ProductList from './components/ProductList';

export default class TidoStore extends Component {
  constructor(props) {
    super(props);
    this.volumes = [];
  }

  componentWillMount() {
    axios
      .get('https://store.tido-music.com/volumes')
      .then((response) => {
        console.log(response);
        this.setState({volumes: response.data});
      })
      .catch((err) => AlertIOS.alert('ERROR', err.message));

    this.setState({volumes: []});
  }

  render() {
    return (
      <View>
        <ProductList products={this.state.volumes} />
      </View>
    );
  }
}


AppRegistry.registerComponent('TidoStore', () => TidoStore);
