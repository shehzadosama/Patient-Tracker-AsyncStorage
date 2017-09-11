/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';




export default class PatientTracker extends Component {
  render() {


    return (
      <Provider store={store}>

        <App />

      </Provider>
    );

  }
}



AppRegistry.registerComponent('PatientTracker3', () => PatientTracker);
