import React, { Component } from "react";
import { Text, View } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import { findOneCustomers } from "../../actions/CustomersActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class SerachByCif extends Component {
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
    const { data } = this.props;
    if (data && prevProps.data == data) {
      this.onReload();
    }
  }
  render() {
    const { search } = this.state;
    const { data } = this.props;
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", margin: 5 }}>
          <Icon
            onPress={() => this.props.navigation.navigate("Camera")}
            size={40}
            type="font-awesome"
            name="qrcode"
          />
          <SearchBar
            containerStyle={{ width: "100%" }}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        <Text>{data.cif}</Text>
        <Text>{data.firstName}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.findOneCustomers.data
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findOneCustomers }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SerachByCif);
