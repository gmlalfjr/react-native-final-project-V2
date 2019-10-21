import HomeScreen from "../screen/home/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
const HomeStackNavigor = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    }
  },

  {
    initialRouteName: "Home"
  }
);

export default HomeStackNavigor;
