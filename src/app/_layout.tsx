import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ }}>
      <Stack.Screen name="index" options={{ title: "Dev-ember" }} />
    </Stack>
  );
}
