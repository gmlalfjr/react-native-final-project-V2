import * as React from "react";
import { Text, View, StyleSheet, Button, Alert, Linking } from "react-native";
import { Button as BUts } from "react-native-elements";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { findOneCustomers } from "../../actions/CustomersActions";
import { bindActionCreators } from "redux";
import { BarCodeScanner } from "expo-barcode-scanner";
import { connect } from "react-redux";
class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <BUts
          title="back"
          containerStyle={{ marginBottom: 20 }}
          onPress={() => this.props.navigation.navigate("TabNavigator")}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, error } = this.props;

    if (data && prevProps.data !== data) {
    }
  }

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({ scanned: true });
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.props.findOneCustomers(data);
    if (this.props.error == null) {
      Alert.alert(
        `Open ${type} ${data} URL?`,
        this.state.scanned,
        [
          {
            text: "Yes",
            onPress: () => {
              this.props.navigation.navigate("CutomerDetail", {
                cif: data
              });
            }
            // onPress: () => Linking.openURL(this.state.scanned)
          },
          { text: "No", onPress: () => {} }
        ],
        { cancellable: false }
      );
    } else {
      alert("data ga ada");
    }
  };
}

function mapStateToProps(state) {
  return {
    data: state.findOneCustomers.data,
    error: state.findOneCustomers.error
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findOneCustomers }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BarcodeScannerExample);
