/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Navigation } from "react-native-navigation";

import Login from "./src/screens/Login";
import ForgotPassword from "./src/screens/ForgotPassword";

Navigation.registerComponent(`LoginScreen`, () => Login);
Navigation.registerComponent(`ForgotPasswordScreen`, () => ForgotPassword);

export const goToLogin = () =>
  Navigation.setRoot({
    root: {
      stack: {
        // create a stack navigation
        id: "stackMain",
        children: [
          {
            component: {
              name: "LoginScreen"
            }
          }
        ]
      }
    }
  });

  export const goToHome = (username) =>
  Navigation.setRoot({
    root: {
      stack: {
        // create a stack navigation
        id: "stackHome",
        children: [
          {
            component: {
              name: "HomeScreen",
              passProps: {
                username
              }
            },            
          }
        ]
      }
    }
  });