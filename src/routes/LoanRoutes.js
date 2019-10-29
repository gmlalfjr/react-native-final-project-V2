import { createStackNavigator } from "react-navigation-stack";
import LoanScreen from "../screen/loan/LoanScreen";
import BillingStackNavigor from "./BillingRoutes";
import BalanceStackNavigor from "./BalanceRoutes";

const LoanStackNavigor = createStackNavigator(
  {
    Loan: {
      screen: LoanScreen
    },
    Billing: {
      screen: BillingStackNavigor
    },
    Balance: {
      screen: BalanceStackNavigor
    }
  },
  {
    initialRouteName: "Loan",
    headerMode: "none"
  }
);

export default LoanStackNavigor;