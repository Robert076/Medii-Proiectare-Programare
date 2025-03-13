import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import backgroundImage from "@/assets/background.png";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <Text>Hello World!</Text>
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
