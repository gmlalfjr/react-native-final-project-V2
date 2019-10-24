import { createStackNavigator } from "react-navigation-stack";
import CustomerScreen from "../screen/customer/CustomerScreen";
import CustomerDetailScreen from "../screen/customer/CustomerDetailScreen";
const CustomerStackNavigor = createStackNavigator(
  {
    Customer: {
      screen: CustomerScreen,
      navigationOptions: {
        title: "Customer"
      }
    },
    CutomerDetail: {
      screen: CustomerDetailScreen,
      navigationOptions: {
        title: "Customer Detail"
      }
    }
  },

  {
    initialRouteName: "Customer"
  }
);

export default CustomerStackNavigor;
