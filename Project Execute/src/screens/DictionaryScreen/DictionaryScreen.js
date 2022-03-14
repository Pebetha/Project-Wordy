import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import styles from "./styles";
import { ImageBackground } from "@/src/components";
import { wordlist } from "@/src/utils";

export default function DictionaryScreen({ navigation }) {
  const renderItem = ({ item, index }) => {
    return (
      <Text style={styles.word}>
        {index + 1}. {item.en} = {item.th}
      </Text>
    );
  };

  return (
    <ImageBackground>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={wordlist.words}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={renderItem}
          contentContainerStyle={{ width: "55%" }}
        />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Level");
        }}
      >
        <Text style={styles.buttonTitle}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
