import SearchScreen from "../screen/search/SerachByCif";
import { createStackNavigator } from "react-navigation-stack";
const SearchStackNavigor = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Search"
      }
    }
  },

  {
    initialRouteName: "Search"
  }
);

export default SearchStackNavigor;
