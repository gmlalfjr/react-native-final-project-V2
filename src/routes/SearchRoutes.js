import SearchScreen from "../screen/search/SerachByCif";
import { createStackNavigator } from "react-navigation-stack";
const SearchStackNavigor = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
      }
    }
  },

  {
    initialRouteName: "Search",
    headerMode: "none"
  }
);

export default SearchStackNavigor;
