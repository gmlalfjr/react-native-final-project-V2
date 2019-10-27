import { createStackNavigator } from "react-navigation-stack";
import PopUp from "../screen/pop-up/Pop-up";

const PopUpStackNavigor = createStackNavigator(
  {
    PopUp: {
      screen: PopUp
    }
  },
  {
    initialRouteName: "PopUp",
    headerMode: "none"
  }
);

export default PopUpStackNavigor;