import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF994C",
    margin: 10,
    marginTop: 50,
    height: 50,
    width: "35%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "15%",
  },
  buttonTitle: {
    color: "#000",
    fontSize: 26,
    // fontWeight: "bold",
    fontFamily: "Kanit",
  },
  brand: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#0095FA",
    position: "absolute",
    top: "15%",
  },
  title: {
    fontSize: 45,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#000",
    marginBottom: 10,
  },
  score: {
    fontSize: 75,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#00EE76",
    marginTop: 25,
  },
  percentage: {
    fontSize: 28,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#000",
    marginTop: 35,
  },
});
