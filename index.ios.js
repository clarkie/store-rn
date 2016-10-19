
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  AlertIOS
} from 'react-native';
import axios from 'axios';

const VolumeList = ({ volumes }) => volumes.map((volume) => (<Volume {...volume} />));

const Volume = ({ title, composer }) => (
  <View>
    <Text>{title}</Text>
    <Text>{composer}</Text>
  </View>
)


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
        {this.state.volumes.map((v) => <Volume key={v.id} {...v} />)}
      </View>
    );
  }
}


AppRegistry.registerComponent('TidoStore', () => TidoStore);
