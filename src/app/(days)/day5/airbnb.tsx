import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
import { items } from "./data";
import CustomMarker from "@/src/components/day-5/CustomMarker";
import ListItem from "./ListItem";

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

type Item = (typeof items)[0];

export default function AirbnbScreen() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Initial mapRegion
  const [mapRegion, setMapRegion] = useState({
    latitude: 47.957016,
    longitude: 18.404041,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Bottom-sheet position variables...
  const snapPoints = useMemo(() => [80, "25%", "50%", "90%"], []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={mapRegion}>
        {items.map((item: Item) => (
          <CustomMarker
            key={item.id}
            item={item}
            onPress={() => setSelectedItem(item)}
          />
        ))}
      </MapView>

      {/* Display selected Item on the Bottom... */}
      {selectedItem && (
        <View>
          <ListItem
            item={selectedItem}
            containerStyle={styles.selectedContainer}
          />
        </View>
      )}

      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Viac ako {items.length} položiek</Text>

          <BottomSheetFlatList
            data={items}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ListItem item={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
  selectedContainer: {
    position: "absolute",
    bottom: 100,
    right: 10,
    left: 10,
  },
});
