
import React, { Component } from 'react';
import { AppRegistry
} from 'react-native';

import App from './src2/App';

export default class ReduxDemo2 extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('ReduxDemo2', () => ReduxDemo2);
