import React, { Component } from "react";
import { View, Image, RefreshControl, StyleSheet } from "react-native";
import { SearchBar, Icon as Icons } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  findAllCustomers,
  findOneCustomers
} from "../../actions/CustomersActions";

import * as Animatable from "react-native-animatable";
import { Block } from "../../components";
import { theme } from "../../constants";
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Body,
  Right,
  Button,
  Icon,
  Toast
} from "native-base";
class CustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    const { navigation } = this.props;
  }
  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAllCustomers();
  }

  onReload() {
    this.props.findOneCustomers(this.state.search);
  }
  updateSearch = search => {
    this.setState({ search: search });
  };

  componentDidUpdate(prevProps, prevState) {
    const { error } = this.props;
    if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: "Ok",
        type: "danger",
        duration: 5000
      });
    }
    const { searchData } = this.props;
    if (searchData && prevProps.searchData == searchData) {
      this.onReload();
    }
  }

  showDetail(cif) {
    this.props.navigation.navigate("CutomerDetail", { cif });
  }

  renderListItem(data, index) {
    
    return (
        <ListItem
          thumbnail
          style={styles.list}
          key={"item-" + index}
          onPress={() => this.showDetail(data.cif)}
        >
          <Body>
            <Text numberOfLines={1}>{data.firstName}</Text>
            <Text note numberOfLines={1}>
              Address : {data.address}
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              key={"item-" + index}
              onPress={() => this.showDetail(data.cif)}
            >
              <Animatable.View animation="fadeInLeft">
                <Icon name="angle-right" type="FontAwesome5" />
              </Animatable.View>
            </Button>
          </Right>
        </ListItem>
    );
  }

  render() {
    const { search } = this.state;
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
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <Block flex={false} row style={styles.tabs}>
          <Text style={styles.textHeader}>Customers</Text>
        </Block>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => this.reload()}
            />
          }
        >
          {this.props.data.length ? (
            this.props.data.map((data, index) =>
              this.renderListItem(data, index)
            )
          ) : (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>Loading....</Text>
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.findAllCustomers.loading,
    data: state.findAllCustomers.data,
    searchData: state.findOneCustomers.data
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllCustomers, findOneCustomers }, dispatch);
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
    marginRight: 32
  }
});
