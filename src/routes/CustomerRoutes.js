import { createStackNavigator } from "react-navigation-stack";
import CustomerScreen from "../screen/customer/CustomerScreen";
import CustomerDetailScreen from "../screen/customer/CustomerDetailScreen";
const CustomerStackNavigor = createStackNavigator(
  {
    Customer: {
      screen: CustomerScreen
    },
    CutomerDetail: {
      screen: CustomerDetailScreen
    }
  },
  {
    initialRouteName: "Customer",
    headerMode: "none"
  }
);

export default CustomerStackNavigor;
