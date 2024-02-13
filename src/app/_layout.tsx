import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
// import {
//   AmaticSC_400Regular,
//   AmaticSC_700Bold,
// } from "@expo-google-fonts/amatic-sc";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [fontsLoaded, fontError] = useFonts({
  //   Poppins: Poppins_700Bold,
  //   Amatic: AMaticSC_400Regular,
  //   AmaticBold: AMaticSC_700Bold,
  // });

  // useEffect(() => {
  //   if (fontsLoaded || fontError) {
  //     SplashScreen.hideAsync();
  //   }
  // },[fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //      return null;
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{ title: "Dev-ember" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
