import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";

export default function DayDetailScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text>DayDetailScreen</Text>

      <Link href={"/day2/onboarding"} asChild>
        <Button title='Go to Onboarding' />
      </Link>
    </View>
  );
}
