import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DayDetailScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen
        options={{
          title: "Day 5: AirBnB Map",
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#18181A" },
        }}
      />
      <View style={styles.content}>
        <Text style={{ color: "white", fontSize: 32, padding: 40 }}>
          Heading
        </Text>
      </View>

      <Link href={"/day5/airbnb"} asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>Go to AirBnB Map</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#18181A",
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: "#27292b",
    marginHorizontal: 20,
    padding: 20,
    alignItems: "center",
    borderRadius: 12,
  },
});
