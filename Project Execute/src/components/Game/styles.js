import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
    marginTop: 50,
    height: 50,
    width: "36%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonNormal: {
    backgroundColor: "#FF994C",
  },
  buttonCorrect: {
    backgroundColor: "#00EE76",
  },
  buttonIncorrect: {
    backgroundColor: "#FF645F",
  },
  buttonTitle: {
    color: "#000",
    fontSize: 26,
    // fontWeight: "bold",
    fontFamily: "Kanit",
  },
  title: {
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#0095FA",
    position: "absolute",
    top: "15%",
  },
  question: {
    fontSize: 45,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#000",
    marginTop: 16,
  },
  answer: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Kanit",
    color: "#000",
  },
  correct: {
    color: "#00EE76",
    fontFamily: "Kanit",
    fontSize: 40,
    textAlign: "center",
    position: "absolute",
    bottom: "22%",
  },
  incorrect: {
    color: "#FF645F",
    fontFamily: "Kanit",
    fontSize: 36,
    textAlign: "center",
    position: "absolute",
    bottom: "22%",
  },
});
