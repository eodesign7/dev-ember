import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import { Item } from '@/src/app/(days)/day5/data'

type CustomMarker = { 
  item: Item;
  onPress: () => void;
}

export default function CustomMarker({ item, onPress }: CustomMarker) {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: item.latitude,
        longitude: item.longitude,
      }}
    >
      <View style={{
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
      }}>
        <Text style={{ fontWeight: '700' }}>{item.title}</Text>
      </View>
    </Marker>
  );
}