import React, { PureComponent } from 'react';
import { View, Animated } from 'react-native';

import styles from './styles';

export default class Helper extends PureComponent {

  render() {
    let { children, style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, style]} {...props}>
          {children}
        </Animated.Text>
      </View>
    );
  }
}
