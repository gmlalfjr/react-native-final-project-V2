import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import HomeStackNavigor from "./HomeRoutes";
import LoginStackNavigor from "./LoginRoutes";
import CameraStackNavigator from "./CameraRoutes";
import CustomerStackNavigor from "./CustomerRoutes";
import SearchStackNavigator from "./SearchRoutes";
import SearchStackNavigor from "./SearchRoutes";
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
        )
      }
    },
    Customer: {
      screen: CustomerStackNavigor,
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
        )
      }
    },
    Search: {
      screen: SearchStackNavigor,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            type="font-awesome"
            name="search"
            color={tintColor}
            iconStyle={{
              fontSize: 35
            }}
          />
        )
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

const SwitchNavigor = createSwitchNavigator(
  {
    TabNavigator: TabNavigator,
    Login: LoginStackNavigor,
    Camera: CameraStackNavigator
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(SwitchNavigor);
