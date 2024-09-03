import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MaterialIcons } from "react-native-vector-icons";
import { AuthContext } from "../../utilities/auth/AuthContext";
import UpdateImage from "../../components/updateImage/UpdateImage";
import AntDesign from '@expo/vector-icons/AntDesign';

const Setting = ({ navigation }) => {
  const { userInfo ,logout} = useContext(AuthContext);

  return (
    <View style={styles.settingContainer}>
      <Text style={styles.settingTitle}>Settings</Text>
      <UpdateImage/>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>{userInfo.name}</Text>
          <Text style={styles.profileEmail}>{userInfo.email}</Text>
        </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowItem}
          onPress={() => navigation.navigate("UpdateProfile")}
        >
          <AntDesign name="infocirlce" size={24} color="#20B2AA" />
          <Text style={styles.rowText}>About App</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rowItem} onPress={() => navigation.navigate("MyProgress")}>
          <MaterialIcons name="bar-chart" size={24} color="#20B2AA" />
          <Text style={styles.rowText}>My Progress</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rowItem}>
          <MaterialIcons name="privacy-tip" size={24} color="#20B2AA" />
          <Text style={styles.rowText}>Privacy Policy</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rowItem} onPress={() => {
            logout(); 
            navigation.navigate("SignUp"); 
          }}>
          <MaterialIcons name="logout" size={24} color="#20B2AA" />
          <Text style={styles.rowText}>Log Out</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  settingTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileDetails: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: "gray",
    marginBottom:20,
  },
  row: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 55,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 5,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
  },
});

export default Setting;
