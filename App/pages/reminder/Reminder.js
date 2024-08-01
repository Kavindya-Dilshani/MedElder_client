
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React, { useContext } from "react";
// import image7 from "../../assets/images/image7.png";
// import { AuthContext } from "../../utilities/auth/AuthContext";
// import { useRoute } from '@react-navigation/native';

// const Reminder = ({ navigation, route }) => {
//   const { userInfo } = useContext(AuthContext);
//   const { medicineName, dose } = route.params;

//   return (
//     <View style={styles.ReminderContainer}>
//       <Text style={styles.ReminderHeader}>Med Elder</Text>
//       <Image
//         style={styles.ReminderImage}
//         resizeMode="contain"
//         source={image7}
//       />
//       <Text style={styles.ReminderMessage}>
//         Hey {userInfo.user.name},take your medicine.
//       </Text>
//       <View style={styles.MainReminderBox}>
//         <Text style={styles.ReminderTime}>{dose.time}</Text>
//         <Text style={styles.ReminderMedicineName}>{medicineName}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.ReminderButton}
//         onPress={() => navigation.navigate("RootTabs")}
//       >
//         <Text style={styles.ReminderButtonText}>OK</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ReminderContainer: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   ReminderHeader: {
//     position: "absolute",
//     top: 50,
//     fontSize: 36,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   ReminderImage: {
//     width: 354,
//     height: 290,
//     marginBottom: 20,
//   },
//   ReminderMessage: {
//     fontSize: 18,
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   MainReminderBox: {
//     width: "80%",
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: "#f8f8f8",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//     marginBottom: 30,
//     alignItems: "center",
//   },
//   ReminderTime: {
//     fontSize: 21,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   ReminderMedicineName: {
//     fontSize: 21,
//     color: "#555",
//     fontWeight: "bold",
//   },
//   ReminderButton: {
//     position: "absolute",
//     bottom: 30,
//     backgroundColor: "#205278",
//     borderRadius: 35,
//     padding: 10,
//     width: 250,
//     height: 62,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   ReminderButtonText: {
//     fontSize: 32,
//     color: "#ffff",
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });

// export default Reminder;


import { View, StyleSheet, Button,Text,Image,TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import image7 from "../../assets/images/image7.png";
import { AuthContext } from "../../utilities/auth/AuthContext";
import React, { useContext } from "react";

export default function Reminder({ navigation}) {
    const { userInfo } = useContext(AuthContext);
  const speak = () => {
    const thingToSay = 'Now 2 p.m. Take your vitamin C pill';
    Speech.speak(thingToSay);
  };

  return (
     <View style={styles.ReminderContainer}>
      <Text style={styles.ReminderHeader}>Med Elder</Text>
      <Image
        style={styles.ReminderImage}
        resizeMode="contain"
        source={image7}
      />
      <Text style={styles.ReminderMessage}>
        Hey {userInfo.user.name},take your medicine.
      </Text>
      <View style={styles.MainReminderBox}>
        <Text style={styles.ReminderTime}>2 p.m</Text>
        <Text style={styles.ReminderMedicineName}>Vitamin C</Text>
      </View>
      <TouchableOpacity
        style={styles.ReminderButton}
        onPress={speak} 
      >
        <Text style={styles.ReminderButtonText}>Speak</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.ReminderButton}
        onPress={() => navigation.navigate("RootTabs")}
      >
        <Text style={styles.ReminderButtonText}>OK</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  ReminderContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  ReminderHeader: {
    position: "absolute",
    top: 50,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  ReminderImage: {
    width: 354,
    height: 290,
    marginBottom: 20,
  },
  ReminderMessage: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  MainReminderBox: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
    alignItems: "center",
  },
  ReminderTime: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ReminderMedicineName: {
    fontSize: 21,
    color: "#555",
    fontWeight: "bold",
  },
  ReminderButton: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#205278",
    borderRadius: 35,
    padding: 10,
    width: 250,
    height: 62,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ReminderButtonText: {
    fontSize: 32,
    color: "#ffff",
    fontWeight: "600",
    textAlign: "center",
  },
});
