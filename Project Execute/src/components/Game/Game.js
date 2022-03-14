import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { ImageBackground } from "../ImageBackground/ImageBackground";

export function Game(props) {
  const { quiz, answers, nextScreen, score, navigation, ...attribute } = props;

  const [isCorrect, setIsCorrect] = useState(null);
  const [styleLeft, setStyleLeft] = useState(styles.buttonNormal);
  const [styleRight, setStyleRight] = useState(styles.buttonNormal);

  const current_score = score || 0;

  const handleAnswer = (ans, pos) => {
    if (ans === quiz.enTrue) {
      setIsCorrect(true);

      pos === 0
        ? setStyleLeft(styles.buttonCorrect)
        : setStyleRight(styles.buttonCorrect);

      setTimeout(() => {
        navigation.navigate(nextScreen, { score: current_score + 1 });
      }, 1500);
    } else {
      setIsCorrect(false);

      pos === 0
        ? setStyleLeft(styles.buttonIncorrect)
        : setStyleRight(styles.buttonIncorrect);
        
      setTimeout(() => {
        navigation.navigate(nextScreen, { score: current_score });
      }, 3000);
    }
  };

  return (
    <ImageBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>WORDY</Text>
        <Text style={styles.question}>{quiz.th}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ ...styles.button, ...styleLeft }}
            onPress={() => {
              handleAnswer(answers[0], 0);
            }}
            // disabled={isCorrect == null ? false : true}
          >
            <Text style={styles.buttonTitle}>{answers[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, ...styleRight }}
            onPress={() => {
              handleAnswer(answers[1], 1);
            }}
            // disabled={isCorrect == null ? false : true}
          >
            <Text style={styles.buttonTitle}>{answers[1]}</Text>
          </TouchableOpacity>
        </View>
        {isCorrect === true && <Text style={styles.correct}>+1 Point</Text>}
        {isCorrect === false && (
          <Text style={styles.incorrect}>
            {quiz.enTrue} = {quiz.th}
          </Text>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}
