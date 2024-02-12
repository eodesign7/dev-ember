import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import DayListItem from "@components/core/DayListItem";
// import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";




const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {


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
