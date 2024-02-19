import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";
import items  from "./data"; 

type ListItem = {
  item: (typeof items)[0];
  containerStyle?: ViewStyle;
};

const ListItem = ({ item, containerStyle }: ListItem) => {

  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.price}>
            {" "}
            ★ {item.rating} ({item.stars})
          </Text>
        </View>
      </View>
    </View>
  );


}


const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  description: {
    color: "gray",
    fontSize: 14,
    fontWeight: "400",
  },
  price: {
    fontWeight: '700',
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});

export default ListItem;