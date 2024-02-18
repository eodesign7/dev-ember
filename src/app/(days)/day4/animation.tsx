import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import Netflix from "@/assets/lottie/netflix.json";

export default function AnimationScreen() {
  return (
    <View>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={Netflix}
      />
    </View>
  );
}


// Day 4 Ended on 12:12 - 1:16:39