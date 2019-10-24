import React, { Component } from "react";
import { TextInput, Button, Alert, View } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text
} from "native-base";
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

  async onUpdate() {
    const updateData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      birthDate: this.state.birthDate,
      birthPlace: this.state.birthPlace
    };
    const data = await this.props.updateCustomers(this.state.id, updateData);
    return data;
  }

  render() {
    return (
      <Container>
        {/* <CustomHeader navigation={this.props.navigation} firstName="Books Detail" /> */}
        <Content padder>
          <Form>
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
          </Form>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
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
