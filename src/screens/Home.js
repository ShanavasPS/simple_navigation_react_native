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
    console.log(this.props)
    const { username } = this.props;
    console.log(username)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi {username}!</Text>
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
  return {    
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);