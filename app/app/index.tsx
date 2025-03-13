import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
// @ts-ignore
import backgroundImage from "@/assets/background.png";
import CustomTextInput from "@/components/CustomTextInput";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <Text>Hello World!</Text>
        <CustomTextInput text1="Weight" text2="kilograms" />
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
});
