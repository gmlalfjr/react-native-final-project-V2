import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { styles } from "./style"
import {  Button as Butts } from 'react-native-elements';
export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Text style={styles.textHeader}> Login </Text>
          <Form>
            <Item style={styles.formInput}>
              <Input placeholder="Username" />
            </Item>
            <Item style={styles.formInput}>
              <Input placeholder="Password" />
            </Item>
            <Butts containerStyle={{marginVertical:20, paddingLeft: "20%", paddingRight: "20%"}} buttonStyle={{backgroundColor:"blue", borderRadius: 200}} title="Login" onPress={() => this.props.navigation.navigate("TabNavigator")} />
          </Form>
        </Content>
      </Container>
    );
  }
}
