"use client";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
// @ts-ignore
import backgroundImage from "@/assets/background.png";
import CustomTextInput from "@/components/CustomTextInput";
import CustomMediaInput from "@/components/CustomMediaInput";

const App = () => {
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <Text>Hello World!</Text>
        {/* {imageBase64 && (
          <Image
            source={{ uri: "data:image/jpeg;base64," + imageBase64 }}
            style={{ width: 200, height: 200 }}
          />
        )} */}
        <CustomTextInput text1="Weight" text2="kilograms" />
        <CustomMediaInput text1="Photos" mandatory={true} onImageSelected={setImageBase64} />
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
