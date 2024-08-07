import { StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import { Marker } from "react-native-maps";
import image22 from "../../assets/images/image22.png";
import { SelectMarkerContext } from '../../context/SelectMarkerContext';

const Markers = ({ place,index }) => {

    const{selectedMarker,setSelectedMarker} = useContext(SelectMarkerContext);

  return (
    <Marker
      coordinate={{
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      }}

      onPress={()=>setSelectedMarker(index)}
    >
      <Image source={image22} style={{ width: 60, height: 60 }} />
    </Marker>
  );
};

export default Markers;

const styles = StyleSheet.create({});
