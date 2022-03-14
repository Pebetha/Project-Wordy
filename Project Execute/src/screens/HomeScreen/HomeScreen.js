import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { ImageBackground } from "@/src/components";

export default function HomeScreen({ navigation }) {
  const onStartPress = () => {
    navigation.navigate("Level");
  };

  return (
    <ImageBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>WORDY</Text>
        <Text style={styles.subTitle}>This or That</Text>
        <TouchableOpacity style={styles.button} onPress={() => onStartPress()}>
          <Text style={styles.buttonTitle}>START</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
