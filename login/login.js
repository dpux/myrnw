import React, {Component} from 'react';
import { View, Text} from 'react-native';
import styles from "./login.scss";
export default class Login extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.blue}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
        );
      }
}