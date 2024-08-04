
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons"; 
import image8 from "../../assets/images/image8.png"; 
import { Colors } from "react-native/Libraries/NewAppScreen";

const EmergencyEvents = ({ route, navigation }) => {
  const { details } = route.params;

  return (
    <View style={styles.EmergencyEventsContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Emergency")}>
          <Feather
            name="chevron-left"
            color="black"
            size={40}
            style={styles.leftIcon}
          />
        </TouchableOpacity>
        <Image
          style={styles.EmergencyEventsImage}
          resizeMode="contain"
          source={image8}
        />
      </View>
      <Text style={styles.emergencyEventHeading}>{details.heading}</Text>
      <Image
        style={styles.EmergencyInfoImage}
        resizeMode="contain"
        source={details.image}
      />
      <Text style={styles.stepTextHeading}>Steps</Text>
      <View style={styles.stepContainer}>
        {details.steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            <View style={styles.stepNumberContainer}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>
              {step}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default EmergencyEvents;

const styles = StyleSheet.create({
  EmergencyEventsContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    // top: 0,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 30, 
  },
  EmergencyEventsImage: {
    width: 40,
    height: 40,
  },
  emergencyEventHeading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "start",
    marginTop: 60, 
  },
  EmergencyInfoImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginVertical: 8,
  },
  stepTextHeading:{
    fontSize: 15,
    color:"#D9D9D9",
    marginBottom: 10,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  stepNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#20B2AA", 
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  stepNumber: {
    color: "#000",
    fontSize: 20,
    fontWeight: "semi-bold",
  },
  stepText: {
    fontSize: 18,
    flex: 1,
  },
});
