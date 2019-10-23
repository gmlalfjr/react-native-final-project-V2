import { createStackNavigator } from "react-navigation-stack";
import CustomerScreen from "../screen/customer/CustomerScreen";
const CustomerStackNavigor = createStackNavigator(
  {
    Customer: {
      screen: CustomerScreen,
      navigationOptions: {
        title: "Customer"
      }
    }
  },

  {
    initialRouteName: "Customer"
  }
);

export default CustomerStackNavigor;
