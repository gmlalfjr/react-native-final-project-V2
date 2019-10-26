import { createStackNavigator } from "react-navigation-stack";
import LoanScreen from "../screen/loan/LoanScreen";

const LoanStackNavigor = createStackNavigator(
  {
    Loan: {
      screen: LoanScreen
    }
  },
  {
    initialRouteName: "Loan",
    headerMode: "none"
  }
);

export default LoanStackNavigor;