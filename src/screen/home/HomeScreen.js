import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> Ini Home </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="Login"
        />
      </View>
    );
  }
}
