import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
// import Share from 'react-native-share';

const MyProgress = ({navigation}) => {
  // State to keep track of the selected button
  const [selectedButton, setSelectedButton] = useState('Past 7 Days');

  // Function to handle button press
  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

//  // Function to handle share button press
//  const myCustomShare = async () => {
//   const shareOptions = {
//     message: 'Check out my medication progress! Here’s a summary of my medication stats.',
//   }
//   try {
//     const shareResponses= await Share.open(shareOptions);
//   } catch (error) {
//     console.error('Error sharing:', error.message);
//   }
// };
  return (
    <View style={styles.myProgressContainer}>
      <View style={styles.myProgressHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <Text style={styles.myProgressBackText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.myProgressHeaderText}>Progress</Text>
        <TouchableOpacity>
          <AntDesign name="sharealt" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.myProgressContentBox}>
        <View style={styles.myProgressToggleButtons}>
          <TouchableOpacity
            style={[
              styles.myProgressToggleButton,
              selectedButton === 'Past 7 Days' && { backgroundColor: '#20B2AA' }
            ]}
            onPress={() => handleButtonPress('Past 7 Days')}
          >
            <Text style={[
              styles.myProgressToggleButtonText,
              selectedButton === 'Past 7 Days' && { color: '#fff' }
            ]}>Past 7 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.myProgressToggleButton,
              selectedButton === 'Last 30 Days' && { backgroundColor: '#20B2AA' }
            ]}
            onPress={() => handleButtonPress('Last 30 Days')}
          >
            <Text style={[
              styles.myProgressToggleButtonText,
              selectedButton === 'Last 30 Days' && { color: '#fff' }
            ]}>Last 30 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.myProgressToggleButton,
              selectedButton === 'Current' && { backgroundColor: '#20B2AA' }
            ]}
            onPress={() => handleButtonPress('Current')}
          >
            <Text style={[
              styles.myProgressToggleButtonText,
              selectedButton === 'Current' && { color: '#fff' }
            ]}>Current</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Start 80 taken, 20 skipped</Text>
          <View style={styles.barChart} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.borderedBoxContainer}>
            {[1, 2, 3].map((_, index) => (
              <View key={index} style={styles.borderedBox}>
                <View style={styles.datePillsContainer}>
                  <Text style={styles.dateText}>01 Jan, 2024</Text>
                  <Text style={styles.pillsText}>4 pills</Text>
                </View>
                <View style={styles.progressDetails}>
                  <AntDesign name="checkcircle" size={20} color="green" />
                  <Text style={styles.detailText}>4 taken</Text>
                  <AntDesign name="closecircle" size={20} color="red" />
                  <Text style={styles.detailText}>0 skipped</Text>
                  <Text style={styles.completeText}>100% complete</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myProgressContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  myProgressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 30,
  },
  myProgressHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  myProgressBackText: {
    fontSize: 16,
    color: "#000",
  },
  myProgressToggleButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  myProgressToggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  myProgressToggleButtonText: {
    fontSize: 16,
  },
  progressContainer: {
    marginBottom: 25,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 15,
  },
  barChart: {
    height: 200,
    backgroundColor: "#E0E0E0",
  },
  myProgressContentBox: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 15,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  borderedBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    width: "100%",
    marginBottom: 10,
  },
  datePillsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 13,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pillsText: {
    fontSize: 14,
  },
  progressDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  detailText: {
    fontSize: 15,
    marginRight: 20,
  },
  completeText: {
    fontSize: 15,
    color: "green",
  },
});

export default MyProgress;
