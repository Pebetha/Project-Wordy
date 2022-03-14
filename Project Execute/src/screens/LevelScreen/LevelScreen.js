import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { ImageBackground } from "@/src/components";

export default function LevelScreen({ navigation }) {
  return (
    <ImageBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.subTitle}>This or That</Text>
        <Text style={styles.title}>Level</Text>
        <TouchableOpacity
          style={{ ...styles.button, ...{ backgroundColor: "#00EE76" } }}
          onPress={() => {
            navigation.navigate("Easy");
          }}
        >
          <Text style={styles.buttonTitle}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, ...{ backgroundColor: "#FF994C" } }}
          onPress={() => {
            navigation.navigate("Normal");
          }}
        >
          <Text style={styles.buttonTitle}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, ...{ backgroundColor: "#FF645F" } }}
          onPress={() => {
            navigation.navigate("Hard");
          }}
        >
          <Text style={styles.buttonTitle}>Hard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, ...{ backgroundColor: "#75D8E7" } }}
          onPress={() => {
            navigation.navigate("Dictionary");
          }}
        >
          <Text style={styles.buttonTitle}>Dictionary</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonTitle}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
