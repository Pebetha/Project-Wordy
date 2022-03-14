import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // backgroundColor: "#00EE95",
    marginTop: 25,
    height: 50,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#000",
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Kanit",
  },
  title: {
    fontSize: 50,
    // fontWeight: "bold",
    marginBottom: 25,
    color: "#F92129",
    fontFamily: "Kanit",
  },
  subTitle: {
    fontSize: 24,
    // fontWeight: "bold",
    color: "#4D473D",
    fontFamily: "Kanit",
  },
  buttonBack: {
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
});
