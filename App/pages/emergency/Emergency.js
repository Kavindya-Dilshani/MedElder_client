
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import image8 from "../../assets/images/image8.png";
import image9 from "../../assets/images/image9.png";
import { AuthContext } from "../../utilities/auth/AuthContext";
import EmergencyConfig from "../../config/EmergencyConfig";

export default function Emergency({ navigation}) {
  const { userInfo } = useContext(AuthContext);

  return (
    <View style={styles.emergencyContainer}>
      <View style={styles.emergencyTopText}>
        <Text style={styles.emergencyHelloText}>
          Hello, {userInfo.user.name}
        </Text>
        <Image style={styles.image8} resizeMode="contain" source={image8} />
      </View>
      <Text style={styles.emergencyPlainText}>Emergency info at hand</Text>
      <View style={styles.searchBar}>
        <View style={styles.searchImage}>
          <Image style={styles.image9} resizeMode="contain" source={image9} />
          <TextInput
            style={styles.SearchNameInput}
            placeholder="Search"
            placeholderTextColor={"#000"}
          />
        </View>
      </View>
      <View style={styles.EmergencyCardContainer}>
        {EmergencyConfig.emergencyList.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.navigate('EmergencyEvents')}>
          <View key={index} style={styles.emergencyCard}>
            <Image
              style={styles.EmergencyCategoryImage}
              resizeMode="contain"
              source={item.image}
            />
            <Text style={styles.EmergencyCategoryTitle}>
              {item.EmergencyCategoryTitle}
            </Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emergencyContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  emergencyTopText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },
  emergencyHelloText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  image8: {
    height: 41,
    width: 41,
  },
  emergencyPlainText: {
    fontSize: 16,
    marginBottom: 40,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderColor: "#D9D9D9",
    width: 365,
    height: 47,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  searchImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  image9: {
    height: 25,
    width: 25,
    marginRight: 20,
  },
  SearchNameInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  EmergencyCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 50,
  },
  emergencyCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 32,
    marginBottom: 35,
    alignItems: "center",
    width:116,
    height:139,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  EmergencyCategoryImage: {
    width: 58,
    height: 58,
    marginBottom: 10,
  },
  EmergencyCategoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
