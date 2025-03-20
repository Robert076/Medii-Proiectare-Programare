import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

interface DropdownProps {
  text1: string;
  text2?: string;
  option1: string;
  option2: string;
  option3: string;
  mandatory?: boolean;
  value: string;
  setValue: (text: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  text1,
  text2,
  option1,
  option2,
  option3,
  mandatory,
  value,
  setValue,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: option1, value: option1 },
    { label: option2, value: option2 },
    { label: option3, value: option3 },
  ]);
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.text1}>
          {text1}
          {mandatory ? "*" : ""}
        </Text>
        <Text style={styles.text2}> ({text2})</Text>
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        textStyle={{ fontSize: 12 }}
      ></DropDownPicker>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  text1: {
    fontFamily: "PoppinsBold",
    fontSize: 11,
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    flexDirection: "column",
    marginBottom: 10,
  },
  dropdown: {
    width: 361,
    minHeight: 36, // somehow this sets the height
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "rgba(0, 0, 0, 0.7)",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    fontFamily: "PoppinsRegular",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  text2: {
    fontFamily: "PoppinsBoldItalic",
    fontSize: 11,
    color: "white",
  },
});
