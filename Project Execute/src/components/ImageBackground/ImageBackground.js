import React from "react";
import { ImageBackground as RNImgBg } from "react-native";
import styles from "./styles";

export const ImageBackground = ({ children }) => {
  return (
    <RNImgBg
      source={require("@/assets/background.png")}
      resizeMode="contain"
      style={styles.background}
    >
      {children}
    </RNImgBg>
  );
};
