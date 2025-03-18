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
        <CustomTextInput text1="Name" mandatory={true} />
        <CustomTextInput text1="Caliber" text2="milimeters" mandatory={true} />
        <CustomTextInput text1="Weight" text2="kilograms" />
        <CustomMediaInput text1="Photos" mandatory={true} onImageSelected={setImageBase64} />
        <CustomTextInput text1="Weight" text2="kilograms" />
        <CustomTextInput
          text1="Action type"
          text2="bolt-action, semi-automatic, automatic"
          mandatory={true}
        />
        <CustomTextInput text1="Category" text2="rifle, smg, pistol, sniper" />
        <CustomTextInput text1="Effective range" text2="meters" />
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
