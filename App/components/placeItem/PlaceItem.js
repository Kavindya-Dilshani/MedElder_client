import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PlaceItem = ({ place }) => {
  const photoUrl =
    place?.photos && place.photos.length > 0
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyCYmVWirR1Tz3ENUdW1OmaZRd0nJ1acVeI`
      : null;

  return (
    <>
      <View style={styles.container}>
        <LinearGradient colors={["transparent", "#d9d9d9"]}>
          {photoUrl && (
            <Image
              source={{ uri: photoUrl }}
              style={{
                width: "100%",
                borderRadius: 10,
                height: 130,
                zIndex: -1,
              }}
            />
          )}
        </LinearGradient>
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {place?.name}
          </Text>
          <Text style={styles.vicinity} numberOfLines={1}>
            {place?.vicinity}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={20} color="yellow" />
          <Text style={styles.rating}>{place?.rating}</Text>
        </View>
        <View style={styles.locationIconContainer}>
          <FontAwesome name="location-arrow" size={25} color="white" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.95,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 20,
    padding: 10,
    height: 260,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  vicinity: {
    fontSize: 18,
    color: "#d9d9d9",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    fontSize: 14,
    marginHorizontal: 7,
  },
  locationIconContainer: {
    padding: 10,
    backgroundColor: "#0c0",
    borderRadius: 6,
    paddingHorizontal: 14,
    alignSelf: "flex-end",
    bottom: 30,
  },
});

export default PlaceItem;
