"use client";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { act, useState } from "react";
// @ts-ignore
import backgroundImage from "@/assets/background.png";
import CustomTextInput from "@/components/CustomTextInput";
import CustomMediaInput from "@/components/CustomMediaInput";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";

const App = () => {
  const [name, setName] = useState("");
  const [caliber, setCaliber] = useState("");
  const [weight, setWeight] = useState("");
  const [category, setCategory] = useState("");
  const [effectiveRange, setEffectiveRange] = useState("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [actionType, setActionType] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <CustomTextInput text1="Name" mandatory={true} value={name} onChange={setName} />
        <CustomTextInput
          text1="Caliber"
          text2="milimeters"
          value={caliber}
          onChange={setCaliber}
          mandatory={true}
        />
        <CustomTextInput
          text1="Weight"
          text2="kilograms"
          value={weight}
          onChange={setWeight}
        />
        <CustomMediaInput text1="Photos" mandatory={true} onImageSelected={setImageBase64} />
        <CustomTextInput
          text1="Weight"
          text2="kilograms"
          value={weight}
          onChange={setWeight}
        />
        <Dropdown
          text1="Action type"
          text2="bolt-action, semi-automatic, full-automatic"
          option1="bolt-action"
          option2="semi-automatic"
          option3="full-automatic"
          value={actionType}
          setValue={setActionType}
        />
        <CustomTextInput
          text1="Category"
          text2="rifle, smg, pistol, sniper"
          value={category}
          onChange={setCategory}
        />
        <CustomTextInput
          text1="Effective range"
          text2="meters"
          value={effectiveRange}
          onChange={setEffectiveRange}
        />
        <Button text="Add gun" onClick={() => {}} />
        <Button text="Cancel" onClick={() => {}} transparent={true} />
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
