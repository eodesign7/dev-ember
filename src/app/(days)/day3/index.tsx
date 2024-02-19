import { Button } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";
import MarkDownDisplay from "@/src/components/day-3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
`;

export default function DayDetailScreen() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />

      <MarkDownDisplay>{description}</MarkDownDisplay>

      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  );
}
