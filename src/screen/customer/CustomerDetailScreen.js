import React, { Component } from "react";
import { StyleSheet, Alert, Image, RefreshControl } from "react-native";
import { ListItem, Button as ButtonEl } from "react-native-elements";
import { Block } from '../../components';
import { theme } from '../../constants';
import { connect } from "react-redux";
import { 
  Container,
  Header,
  Content,
  List,
  Text,
  Icon,
  Button,
  Toast,
  Left, } from "native-base";
import {
  findOneCustomers,
  updateCustomers
} from "../../actions/CustomersActions";
import { getAccountByCIF } from "../../actions/CustomerAccount";
import { bindActionCreators } from "redux";
class CustomerDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cif: this.props.navigation.getParam("cif"),
      firstName: null,
      lastName: null,
      address: null,
      birthDate: null,
      birthPlace: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findOneCustomers(this.state.cif);
    this.props.getAccountByCIF("KKKK");
  }
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    if (data && prevProps.data !== data) {
      this.setState({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        birthDate: data.birthDate,
        birthPlace: data.birthPlace
      });
    }
    if (this.props.error != null) {
      if (this.props.error) {
        Alert.alert(
          "Error Message",
          ` Something Error`,
          [
            {
              text: "Ok",
              style: "cancel"
            }
          ],
          { cancelable: true }
        );
      }
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Button
            transparent
            style={styles.iconBack}
            onPress={() => this.props.navigation.navigate('Customer')}
          >
            <Icon name="angle-left" type="FontAwesome5" />
          </Button>
          <Image source={require('../../../assets/image.png')} style={{width: 105, height: 33, top: 12}}/>
        </Header>
        <Block flex={false} row style={styles.tabs}>
            <Text style={styles.textHeader}>Info {this.state.firstName}</Text>
        </Block>
        <Content padder refreshControl={<RefreshControl refreshing={this.props.loading} onRefresh={() => this.reload()}/>}>
          <List>
            <ListItem
              title="Address"
              rightTitle={this.state.address ? this.state.address.toString() : ""}
              hideChevron
              style={{borderBottomWidth: StyleSheet.hairlineWidth}}
            />
            <ButtonEl
              title="Info Account"
              buttonStyle={{ marginTop: 20 }}
              onPress={this.handleSettingsPress}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.findOneCustomers.loading,
    data: state.findOneCustomers.data || state.getByCIF.data,
    update: state.updateCustomer.data,
    error: state.findOneCustomers.error
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { findOneCustomers, updateCustomers, getAccountByCIF },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomerDetailScreen);

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
})
{/* <Form>
            <Item floatingLabel>
              <Label> firstName </Label>
              <Input
                onChangeText={TextInput => {
                  this.setState({ firstName: TextInput });
                }}
                value={this.state.firstName}
              />
            </Item>
            <Item floatingLabel>
              <Label>last name</Label>
              <Input
                onChangeText={TextInput => {
                  this.setState({ lastName: TextInput });
                }}
                value={this.state.lastName}
              />
            </Item>
            <Item floatingLabel>
              <Label>address</Label>
              <Input
                onChangeText={TextInput => {
                  this.setState({ address: TextInput });
                }}
                value={"" + this.state.address}
              />
            </Item>
            <Item floatingLabel>
              <Label>birthDate</Label>
              <Input
                onChangeText={TextInput => {
                  this.setState({ birthDate: TextInput });
                }}
                value={"" + this.state.birthDate}
              />
            </Item>
            <Item floatingLabel>
              <Label>birthPlace</Label>
              <Input
                onChangeText={TextInput => {
                  this.setState({ birthPlace: TextInput });
                }}
                value={"" + this.state.birthPlace}
              />
            </Item>
            <Button
              onPress={() => {
                this.onUpdate();
              }}
              title="submit"
            />
          </Form> */}