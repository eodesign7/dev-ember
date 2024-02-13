import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideInRight } from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome #DEVember",
    description: "Daily React Native challenges during December",
  },
  {
    icon: "book-reader",
    title: "Learn every day",
    description: "Ultimate React Native Course",
  },
  {
    icon: "people-arrows",
    title: "Grow & Learn Together",
    description: "24-Day challenge to learn everything about React Native",
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <GestureDetector gesture={swipes}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.pageContent}
          key={screenIndex}
         >
          <View style={styles.indicatorContainer}>
            {onboardingSteps.map((step, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  {
                    backgroundColor: index === screenIndex ? "#CEF202" : "grey",
                  },
                ]}
              />
            ))}
          </View>

          <Animated.View entering={FadeIn} exiting={FadeOut}>
             <FontAwesome5
               style={styles.image}
               name={data.icon}
               size={120}
               color={"#CEF202"}
             />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text entering={SlideInRight.duration(350)} style={styles.title}>{data.title}</Animated.Text>
            <Animated.Text entering={SlideInRight.delay(75)} style={styles.description}>{data.description}</Animated.Text>
            <View style={styles.buttonsRow}>
              <Text
                onPress={endOnboarding}
                style={{ fontSize: 18, fontWeight: "200", color: "white" }}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.buttonText}>Continue</Text>
                  <FontAwesome5
                    name="long-arrow-alt-right"
                    size={20}
                    color="white"
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141a",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 56,
    color: "#FDFDFD",
    fontWeight: "600",
    fontFamily: "Helvetica",
    letterSpacing: -0.5,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "400",
    padding: 16,
    paddingHorizontal: 24,
  },

  // Steps
  indicatorContainer: {
    flexDirection: "row",
    gap: 8,
  },
  indicator: {
    flex: 1,
    height: 2,
    backgroundColor: "gray",
    borderRadius: 4,
  },
});
