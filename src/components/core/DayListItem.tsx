import { View, Text, StyleSheet } from "react-native";
import React from "react";

type DayListType = {
   day: number;
};

export default function DayListItem({ day }: DayListType) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#1a242b",
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#659cc9",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#659cc9",
    fontSize: 64,
  },
});
