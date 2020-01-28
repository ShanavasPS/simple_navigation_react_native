/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { goToHome } from "../../navigation"; // import the functions for loading the home screen
import * as UserActions from '../../action'

class Login extends Component {

  static get options() {
    return {
      topBar: {
        visible: false,
        title: {
          text: 'Login'
        }
      }
    };
  }

  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>

          <View style={styles.main}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Enter your username</Text>
              <TextInput
                onChangeText={username => this.setState({ username })}
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Enter your password</Text>
              <TextInput
                onChangeText={password => this.setState({ password })}
                style={styles.textInput}
              />
            </View>
            <Button title="Login" color="#0064e1" onPress={this.login} />
            <TouchableOpacity onPress={this.goToForgotPassword}>
              <View style={styles.center}>
                <Text style={styles.link_text}>Forgot Password</Text>
              </View>
            </TouchableOpacity>
            <Button title="Register" color="#0064e1" onPress={this.goToRegister} />
          </View>
        </View>
      </View>
    );
  }

  //
  login = async () => {
    const { username, password } = this.state;
    if (username) {
      // await AsyncStorage.setItem('username', username);
      const userInfo = { username, password }
      this.props.loginGetSuccess(userInfo);
    }
  }

  goToRegister = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'RegisterUserScreen',
      }
    });
  }

  goToForgotPassword = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ForgotPasswordScreen',
      }
    });
  }
}
//

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  fieldContainer: {
    marginTop: 20
  },
  label: {
    fontSize: 16
  },
  textInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    padding: 5
  },
  link_text: {
    color: '#2e45ec'
  },
  center: {
    alignSelf: 'center',
    marginTop: 10
  }
});

const mapStateToProps = state => {
  return {   
  };
};

const mapDispatchToProps = dispatch => ({
  loginGetSuccess: (userInfo) => dispatch(UserActions.loginGetSuccess(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
