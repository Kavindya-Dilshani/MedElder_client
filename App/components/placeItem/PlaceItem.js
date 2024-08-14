import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PlaceItem = ({ place }) => {
  const photoUrl =
    place?.photos && place.photos.length > 0
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyCYmVWirR1Tz3ENUdW1OmaZRd0nJ1acVeI`
      : null;

  return (
    <View style={styles.container}>
      <LinearGradient colors={["transparent", "#d9d9d9"]} style={styles.gradient}>
        {photoUrl && (
          <Image
            source={{ uri: photoUrl }}
            style={styles.image}
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
        <View style={styles.distanceAndDurationContainer}>
          <Text style={styles.distanceAndDurationText}>
            Distance: {place?.distance}
          </Text> 
          <Text style={styles.distanceAndDurationText}>
            Time: {place?.duration}
          </Text> 
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={20} color="yellow" />
        <Text style={styles.rating}>{place?.rating}</Text>
      </View>
      <View style={styles.locationIconContainer}>
        <FontAwesome name="location-arrow" size={25} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.95,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
  gradient: {
    borderRadius: 10,
  },
  image: {
    width: "100%",
    borderRadius: 10,
    height: 110,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  vicinity: {
    fontSize: 18,
    color: "#d9d9d9",
    marginBottom: 10,
  },
  distanceAndDurationContainer: {
    marginBottom: 10,
  },
  distanceAndDurationText: {
    fontSize: 16,
    color: "#000",
    fontWeight:"600"
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    marginHorizontal: 7,
  },
  locationIconContainer: {
    padding: 10,
    backgroundColor: "#0c0",
    borderRadius: 6,
    paddingHorizontal: 14,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default PlaceItem;
