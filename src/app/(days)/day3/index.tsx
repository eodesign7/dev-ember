import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";

export default function DayDetailScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <Text>DayDetailScreen</Text>

      <Link href={"/day3/editor"} asChild>
        <Button title='Go to Editor' />
      </Link>
    </View>
  );
}
