/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import Loading from "./src/screens/Loading"; // the loading screen
import Home from "./src/screens/Home"; // the loading screen
import ReduxProvider from "./createStore"

Navigation.registerComponent('LoadingScreen', () => ReduxProvider(Loading), () => Loading);
Navigation.registerComponent('HomeScreen', () => ReduxProvider(Home), () => Home);

Navigation.events().registerAppLaunchedListener(() => {
  // set the root component
  Navigation.setRoot({
    root: {
      component: {
        name: "LoadingScreen"
      }
    }
  });
});
