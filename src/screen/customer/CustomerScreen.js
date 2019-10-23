import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findAllCustomers } from "../../actions/CustomersActions";
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
          this.props.data.map(data => <Text key={data.id}> {data.name}</Text>)
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
