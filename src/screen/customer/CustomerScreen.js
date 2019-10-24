import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findAllCustomers } from "../../actions/CustomersActions";

import { Body, Right, Button, ListItem } from "native-base";
class CustomerScreen extends Component {
  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAllCustomers();
  }

  render() {
    return (
      <View>
        {this.props.data.length ? (
          this.props.data.map(data => (
            <ListItem
              key={data.cif}
              style={{
                height: 100,
                width: "100%"
              }}
            >
              <Body>
                <Text>{data.firstName}</Text>
              </Body>
              <Right>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate("CutomerDetail", {
                      cif: data.cif
                    })
                  }
                  transparent
                >
                  <Text style={{ color: "blue" }}>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))
        ) : (
          <Text>data ga ada</Text>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.findAllCustomers.data
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllCustomers }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomerScreen);
