import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ButtonInterface {
  text: string;
  onClick: () => void;
  transparent?: boolean;
}

const Button: React.FC<ButtonInterface> = ({ text, onClick, transparent }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.view}>
        <Text style={[styles.button, transparent && styles.transparentBg]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    color: "white",
    backgroundColor: "#B7A06E",
    width: "100%",
    height: "100%",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 5,
    textAlignVertical: "center",
    paddingTop: 8,
    marginTop: 10,
    fontFamily: "PoppinsBoldItalic",
  },
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 361,
    height: 36,
  },
  transparentBg: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    textDecorationColor: "white",
    textDecorationLine: "underline",
    fontFamily: "PoppinsItalic",
  },
});
