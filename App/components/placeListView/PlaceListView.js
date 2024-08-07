import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef,useContext } from "react";
import PlaceItem from "../placeItem/PlaceItem";
import { SelectMarkerContext } from '../../context/SelectMarkerContext';

const PlaceListView = ({ placeList }) => {
  const flatListRef = useRef(null);
  const{selectedMarker,setSelectedMarker} = useContext(SelectMarkerContext);

  useEffect(() => {
    selectedMarker && scrollToIndex(selectedMarker);
  }, [selectedMarker]);

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  const getItemLayout = (_, index) => ({
    length: Dimensions.get("window").width,
    offset: Dimensions.get("window").width * index,
    index,
  });

  return (
    <View style={styles.placeListContainer}>
      <FlatList
        data={placeList}
        horizontal={true}
        pagingEnabled
        getItemLayout={getItemLayout}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index}>
            <PlaceItem place={item} />
          </View>
        )}
      />
    </View>
  );
};

export default PlaceListView;

const styles = StyleSheet.create({
  placeListContainer: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    width: "100%",
  },
});
