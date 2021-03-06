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
import RegisterUser from "./src/screens/RegisterUser";
import ReduxProvider from "./createStore"

Navigation.registerComponent(`LoginScreen`, () => ReduxProvider(Login), () => Login);
Navigation.registerComponent(`ForgotPasswordScreen`, () => ReduxProvider(ForgotPassword), () => ForgotPassword);
Navigation.registerComponent(`RegisterUserScreen`, () => ReduxProvider(RegisterUser), () => RegisterUser);

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
              name: "HomeScreen"
            },            
          }
        ]
      }
    }
  });