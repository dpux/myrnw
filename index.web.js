import { AppRegistry } from "react-native";
import App from "./App";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById("react-app")
});

if (module.hot) {
  module.hot.accept();
}