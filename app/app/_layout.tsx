import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#B7A06E" },
        }}
      />
      <Stack.Screen
        name="add/add"
        options={{
          headerTitle: "Add gun",
          headerStyle: { backgroundColor: "#B7A06E" },
        }}
      />
    </Stack>
  );
}
