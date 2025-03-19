import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

interface DropdownProps {
  text1: string;
}

const Dropdown: React.FC<DropdownProps> = ({ text1 }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "Apple" },
    { label: "Banana", value: "Banana" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{text1}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
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
});
