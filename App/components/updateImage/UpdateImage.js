import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from "react-native-vector-icons";
import * as ImagePicker from "expo-image-picker";

const UpdateImage = () => {
  const [image, setImage] = useState(null);  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const data = "data:image/jpeg;base64," + result.assets[0].base64;
      setImage(data);
    }
  };

  return (
    <View style={styles.profileSection}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Image
          style={styles.profileImage}
          source={
            image
              ? { uri: image }
              : { uri: "https://via.placeholder.com/100" }
          }
        />
        <View style={styles.cameraIconContainer}>
          <MaterialIcons name="camera-alt" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateImage;

const styles = StyleSheet.create({
  profileSection: {
    alignItems: "center",
    marginBottom: 10,
  },
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E0E0E0",
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#007BFF",
    borderRadius: 15,
    padding: 5,
  },
});
