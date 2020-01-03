import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get('window')

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 220,
    height: 70,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 80
  },
  logotext: {
    color: 'white',
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(225,225,255,0.7)',
    marginHorizontal: 25,
    marginTop: 10
  },
  inputIcon: {
    position: "absolute",
    top: 20,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 20,
    right: 40
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#3498db',
    justifyContent: "center",
    marginTop: 20
  },
  textLogin: {
    textAlign: "center",
    fontSize: 20,
    color: 'white'
  }
  });
  