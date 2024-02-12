import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import DayListItem from "../../src/components/core/DayListItem";
// import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
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
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#13191c",
  },
  content: {
    gap: 12,
  },
  column: {
    gap: 12,
  },
});
