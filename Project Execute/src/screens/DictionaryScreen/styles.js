import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
    marginBottom: "30%",
  },
  button: {
    backgroundColor: "#FF645F",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    height: 50,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "4%",
    left: 0,
  },
  buttonTitle: {
    color: "#000",
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Kanit",
  },
  word: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Kanit",
  },
});
