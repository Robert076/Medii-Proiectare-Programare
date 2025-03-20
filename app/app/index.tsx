import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/add",
          });
        }}
      >
        <Text>Go to add</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
