import React, { Component } from "react";
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from "./style";

import bgImage from "../../../assets/bgimage.jpg";
import logo from "../../../assets/image.png";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      Username: "",
      Password: ""
    }
  }

  Login = () => {
    if (this.state.Username == "admin" && this.state.Password == "admin") {
      this.props.navigation.navigate("Home");
    } else {
      alert('Username or password failed!')
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true})
    } else {
      this.setState({ showPass: true, press: false})
    }
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={bgImage}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logotext}>Welcome</Text>
        </View>
        <KeyboardAvoidingView style={styles.container} behavior='position'>
        <View>
          <Icon name={'ios-person'} size={23} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255,255,255,0.7)'} underlineColorAndroid='transparent'
          onChangeText={(Username) => this.setState({Username})}/>
        </View>
        <View>
          <Icon name={'ios-key'} size={23} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder={'Password'} secureTextEntry={this.state.showPass} placeholderTextColor={'rgba(255,255,255,0.7)'} underlineColorAndroid='transparent'
          onChangeText={(Password) => this.setState({Password})}/>
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={23} color={'rgba(255,255,255,0.7)'} />
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.btnLogin} onPress={this.Login.bind(this)}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
