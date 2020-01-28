/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import * as Constants from '../../constants'
import { goToLogin } from "../../navigation";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi {this.props.username}!</Text>
        <Button onPress={this.logout} title="Logout" color="#841584" />
      </View>
    );
  }
  //

  logout = async () => {
    goToLogin();
    this.props.logoutGetSuccess();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {    
    username: state.login?.username,
  };
};

const mapDispatchToProps = dispatch => ({
  logoutGetSuccess: () => dispatch({
    type: Constants.LOGOUT_GET_SUCCESS,
    username: null,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);