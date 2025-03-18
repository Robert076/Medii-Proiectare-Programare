import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_400Regular, // Regular
  Poppins_700Bold, // Bold Regular
  Poppins_700Bold_Italic, // Bold Italic
} from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

type CustomTextInputProps = {
  text1: string;
  text2?: string;
  mandatory?: boolean;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({ text1, text2, mandatory }) => {
  const [fontsLoaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsBoldItalic: Poppins_700Bold_Italic,
    PoppinsRegular: Poppins_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.text1}>
          {text1} {mandatory ? "*" : ""}
        </Text>
        {text2 && <Text style={styles.text2}> ({text2})</Text>}
      </Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    flexDirection: "column",
    marginBottom: 10,
  },
  text1: {
    fontFamily: "PoppinsBold",
    fontSize: 11,
    color: "white",
  },
  text2: {
    fontFamily: "PoppinsBoldItalic",
    fontSize: 11,
    color: "white",
  },
  textInput: {
    width: 361,
    height: 36,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "rgba(0, 0, 0, 0.7)",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});
