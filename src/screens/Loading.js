/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// src/screens/Loading.js
import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { goToLogin, goToHome } from "../../navigation"; // import the functions for loading the login screen
import { connect } from 'react-redux';

class Loading extends Component {
  async componentDidMount() {
    const { username } = this.props;
    if (username) {
      goToHome();
    } else {
      goToLogin();
    }
  }

  render() {
    // show loading indicator
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {    
    username: state.login?.username,
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);