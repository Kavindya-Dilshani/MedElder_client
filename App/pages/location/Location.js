import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewStyle from "../../utilities/MapViewStyle.json";
import { UserLocationContext } from "../../context/UserLocationContext";
import image21 from "../../assets/images/image21.png";
import { AuthContext } from "../../utilities/auth/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GlobalApi from "../../utilities/GlobalApi";
import PlaceListView from "../../components/placeListView/PlaceListView";
import Markers from "../../components/markers/Markers";
import { SelectMarkerContext } from "../../context/SelectMarkerContext";

export default function Location({ searchedLocation }) {
  const { location, setLocation } = useContext(UserLocationContext);
  const { userInfo } = useContext(AuthContext);
  const [placeList, setPlaceList] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState([]);

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      GetNearBySearchPlace();
    }
  }, [location]);

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlace(location.latitude, location.longitude)
      .then((resp) => {
        console.log(resp.data.results);
        setPlaceList(resp.data.results);
      })
      .catch((err) => {
        console.error("Error fetching nearby places:", err);
      });
  };

  return (
    location?.latitude && (
      <SelectMarkerContext.Provider value={{ selectedMarker, setSelectedMarker }}>
        <View style={styles.mapContainer}>
          <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
              placeholder="Search nearby medical services"
              fetchDetails={true}
              enablePoweredByContainer={false}
              onPress={(data, details = null) => {
                console.log(data, details);
                const location = details?.geometry?.location;
                if (location) {
                  setLocation({
                    latitude: location.lat,
                    longitude: location.lng,
                  });
                }
              }}
              query={{
                key: 'AIzaSyCYmVWirR1Tz3ENUdW1OmaZRd0nJ1acVeI',
                language: "en",
              }}
              styles={{
                container: styles.autocompleteContainer,
                textInput: styles.textInput,
                listView: styles.listView,
              }}
            />
          </View>
          <MapView
            style={styles.map}
            customMapStyle={MapViewStyle}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0622,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            >
              <Image source={image21} style={{ width: 50, height: 50 }} />
            </Marker>
            {placeList.slice(0, 5).map((item, index) => (
              <Markers key={index} index={index} place={item} />
            ))}
          </MapView>
          {placeList.length > 0 ? <PlaceListView placeList={placeList} /> : null}
        </View>
      </SelectMarkerContext.Provider>
    )
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    zIndex: 1000,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  autocompleteContainer: {
    flex: 1,
  },
  textInput: {
    height: 40,
    fontSize: 16,
  },
  listView: {
    marginTop: 10,
  },
});
