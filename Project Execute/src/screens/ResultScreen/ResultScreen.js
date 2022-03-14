import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { ImageBackground } from "@/src/components";

const total_question = 10;

export default function ResultScreen({ navigation, route }) {
  const { score } = route.params;

  const calPercentage = () => {
    return (score / total_question) * 100;
  };

  return (
    <ImageBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.brand}>WORDY</Text>
        <Text style={styles.title}>Score</Text>
        <Text style={styles.score}>
          {score}/{total_question}
        </Text>
        <Text style={styles.percentage}>Amounts to {calPercentage()}%</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonTitle}>Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
