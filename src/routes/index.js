import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import HomeStackNavigor from "./HomeRoutes";
import LoginStackNavigor from "./LoginRoutes";

export default class Routes extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigor,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            type="font-awesome"
            name="home"
            color={tintColor}
            iconStyle={{
              fontSize: 35
            }}
          />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.navigate("Home");
          defaultHandler();
        }
      }
    },
    Login: {
      screen: LoginStackNavigor,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            type="font-awesome"
            name="user"
            color={tintColor}
            iconStyle={{
              fontSize: 35
            }}
          />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.navigate("login");
          defaultHandler();
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      style: {
        backgroundColor: "black"
      },

      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        tintColor: "red",
        activeTintColor: "black",
        inactiveTintColor: "grey",
        labelStyle: {
          fontSize: 12
        },
        style: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,

          borderTopColor: "#9e9e9e"
        }
      }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);
