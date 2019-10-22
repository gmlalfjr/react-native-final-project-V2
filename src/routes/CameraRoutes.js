import { createStackNavigator } from "react-navigation-stack";
import CameraExample from "../screen/camera/CameraScreen";
const CameraStackNavigator = createStackNavigator(
  {
    Camera: {
      screen: CameraExample,
      navigationOptions: {
        header: null
      }
    }
  },

  {
    initialRouteName: "Camera"
  }
);

export default CameraStackNavigator;
