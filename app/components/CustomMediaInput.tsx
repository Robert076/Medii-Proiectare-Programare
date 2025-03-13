import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_400Regular, // Regular
  Poppins_700Bold, // Bold Regular
  Poppins_700Bold_Italic, // Bold Italic
} from "@expo-google-fonts/poppins";
import * as ImagePicker from "expo-image-picker";

SplashScreen.preventAutoHideAsync();

type CustomMediaInputProps = {
  text1: string;
  mandatory?: boolean;
};

const CustomMediaInput: React.FC<CustomMediaInputProps> = ({ text1, mandatory }) => {
  const [fontsLoaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsBoldItalic: Poppins_700Bold_Italic,
    PoppinsRegular: Poppins_400Regular,
  });

  const [image, setImage] = useState<string | null>(null); // To store the selected image URI

  const pickImage = async () => {
    // Pick an image from the media library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
      <Text style={styles.text1}>
        {text1} {mandatory ? "*" : ""}
      </Text>

      {/* Image container with border and shadow */}
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Tap to upload image</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomMediaInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    flexDirection: "column",
  },
  text1: {
    fontFamily: "PoppinsBold",
    fontSize: 11,
    color: "white",
  },
  imageContainer: {
    width: 361,
    height: 160,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "rgba(0, 0, 0, 0.7)",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 4,
  },
  image: {
    width: "33.3%",
    height: "50%",
    borderRadius: 5,
    resizeMode: "cover", // Ensure image is resized to fit the container
  },
  imagePlaceholder: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
  },
});
