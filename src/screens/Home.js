/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { goToLogin } from "../../navigation";
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { username } = this.props;
    console.log('username inside Home is ' + username)
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
  console.log('State:');
  console.log(state);
  return {    
    username: state.login.username.username,
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);