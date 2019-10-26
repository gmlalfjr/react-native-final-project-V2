import React, { Component } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { findOneCustomers } from "../../actions/CustomersActions";
import { bindActionCreators } from "redux";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import { theme } from "../../constants";
import { Block } from "../../components";
import {
    Container,
    Header,
    Content,
    ListItem,
    Body,
    Right,
    Button,
    Icon,
    Toast
  } from "native-base";
class CustomerScreen extends Component {
  state = {
    search: "",
    cif: null
  };

  componentDidMount() {
    this.onReload();
  }
  onReload() {
    this.props.findOneCustomers(this.state.search);
  }
  updateSearch = search => {
    this.setState({ search: search });
  };
  componentDidUpdate(prevProps, prevState) {
    const { data, error } = this.props;
    if (data && prevProps.data == data) {
      this.onReload();
    }
    if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: 'Ok',
        type: "warning",
        duration: 1000,
        position: 'top'
      })
    }
  }

  showDetail(cif) {
    const { error } = this.props;
    if (cif != null) {
      this.props.navigation.navigate("CutomerDetail", { cif });
    } else {
      Toast.show({
        text: "Cif Already Exist",
        buttonText: 'Ok',
        type: "danger",
        duration: 5000,
        position: 'top'
      })
    }
  }

  render() {
    const { search } = this.state;
    const { data } = this.props;
    return (
      <Container>
        <Header>
          <Button
            transparent
            style={styles.iconBack}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Icon name="angle-left" type="FontAwesome5" />
          </Button>
          <Image
            source={require("../../../assets/image.png")}
            style={{ width: 105, height: 33, top: 12 }}
          />
        </Header>
          <SearchBar
            containerStyle={{ width: "100%" }}
            placeholder="Type Here CIF..."
            onChangeText={this.updateSearch}
            value={search}
            platform= "ios"
          />
          <Block flex={false} row style={styles.tabs}>
            <Text style={styles.textHeader}>Customers</Text>
          </Block>
        <ListItem
          style={styles.list}
          onPress={() => this.showDetail(data.cif)}
        >
          <Body>
            <Text numberOfLines={1}>
              Cif           : {data.firstName}
            </Text>
            <Text numberOfLines={1}>
              Name     : {data.firstName}
            </Text>
            <Text numberOfLines={1}>
              Address : {data.address}
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.showDetail(data.cif)}
            >
              <Animatable.View animation="fadeInLeft">
                <Icon name="angle-right" type="FontAwesome5" />
              </Animatable.View>
            </Button>
          </Right>
        </ListItem>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.findOneCustomers.loading,
    data: state.findOneCustomers.data,
    error: state.findOneCustomers.error,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findOneCustomers }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomerScreen);

const styles = StyleSheet.create({
  iconBack: {
    zIndex: 9,
    position: "absolute",
    top: 6,
    left: 5
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
    marginBottom: 1
  },
  textHeader: {
    fontSize: 26,
    fontWeight: "bold",
    paddingBottom: 10
  },
  list: {
    marginRight: 32,
    marginLeft: 32
  }
});
