/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import * as UserActions from '../../action'

class RegisterUser extends Component {
  static get options() {
    return {
      topBar: {
        visible: true, // visible
        title: {
          text: "New Registration"
        }
      }
    };
  }

  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Enter your email</Text>
              <TextInput
                onChangeText={email => this.setState({ email })}
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
            <Button
              title="Register"
              color="#0064e1"
              onPress={this.registerUser}
            />
          </View>
        </View>
      </View>
    );
  }

  //
  registerUser = async () => {

    const { email, password} = this.state
    const userInfo = { email, password }
    this.props.registerUserSuccess(userInfo)
  };
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
  }
});

const mapStateToProps = state => {
  return {    
  };
};

const mapDispatchToProps = dispatch => ({
  registerUserSuccess: (userInfo) => dispatch(UserActions.registerUserSuccess(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
