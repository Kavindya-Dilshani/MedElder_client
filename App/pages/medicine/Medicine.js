import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";
import image2 from "../../assets/images/image2.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import Calendar from "../../components/calender/Calender";
import { AuthContext } from "../../utilities/auth/AuthContext";
import Reminder from "../reminder/Reminder";
import moment from "moment-timezone";
import { useFocusEffect } from "@react-navigation/native";

export default function Medicine({ navigation }) {
  const [allMedicineData, setAllMedicineData] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [showReminder, setShowReminder] = useState(false);
  const [reminderData, setReminderData] = useState([]);
  const [reminderToDelete, setReminderToDelete] = useState(null);

  const getAllMedicine = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://192.168.8.104:5001/api/medicine"
      );
      const filteredReminderData = getItemsForReminder(response.data);

      setReminderData(filteredReminderData);
      setAllMedicineData(response.data);
      setShowReminder(filteredReminderData.length > 0);
    } catch (error) {
      console.error("Error fetching medicine data:", error);
    }
    console.log("::::::::::::::::::::::::");
  }, []);

  const getItemsForReminder = useCallback((responseData) => {
    const timeZone = "Asia/Colombo";
    const currentTime = moment().tz(timeZone);

    return responseData
      .filter((item) => {
        return item.doses.some((dose) => {
          const [time, modifier] = dose.time.split(" ");
          let [hours, minutes] = time.split(":").map(Number);

          if (modifier === "PM" && hours !== 12) {
            hours += 12;
          } else if (modifier === "AM" && hours === 12) {
            hours = 0;
          }

          const doseTime = moment()
            .tz(timeZone)
            .set({ hours, minutes, seconds: 0, milliseconds: 0 });
          const tenMinutesLater = doseTime.clone().add(10, "minutes");

          return (
            currentTime.isSameOrAfter(doseTime) &&
            currentTime.isSameOrBefore(tenMinutesLater)
          );
        });
      })
      .flatMap((medicine) =>
        medicine.doses.map((dose) => ({
          doseId: dose._id,
          time: dose.time,
          medicineId: medicine._id,
          medicineName: medicine.medicineName,
        }))
      );
  }, []);

  const handleFocus = useCallback(() => {
    // Your side effect code here
    getAllMedicine();
  }, []);

  useFocusEffect(handleFocus);

  const renderDoseDetails = (doses) =>
    doses.map((dose, index) => (
      <View key={index} style={styles.doseContainer}>
        <Text style={styles.doseTime}>{dose.time}</Text>
        <Text style={styles.doseMealTiming}>
          {dose.mealTiming === 0 ? "Before meal" : "After meal"}
        </Text>
      </View>
    ));

  const handleHideReminder = () => {
    setShowReminder(false);
  };

  const handleDeleteMedicine = async (medicineId) => {
    try {
      console.log(`Deleting medicine with ID: ${medicineId}`); // Check console log for correct ID
      await axios.delete(`http://192.168.8.104:5001/api/medicine/${medicineId}`);
      // Refresh the medicine list after deletion
      getAllMedicine();
    } catch (error) {
      console.error("Error deleting medicine:", error.response ? error.response.data : error.message);
    }
  };
  

  const renderReminderItem = ({ item }) => (
    <View style={styles.reminderBoxContainer}>
      <View style={styles.reminderBox}>
        <View style={styles.imageCircle}>
          <Image style={styles.image5} resizeMode="contain" source={image5} />
        </View>
        <View style={styles.reminderText}>
          <Text style={styles.pillText}>
            {item.amount} {item.selectedMedicine}
          </Text>
          <Text style={styles.medicineText}>{item.medicineName}</Text>
          {renderDoseDetails(item.doses)}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleDeleteMedicine(item._id)} // Call the delete function
        style={styles.deleteIconContainer}
      >
        <Icon name="delete" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
  

  return !showReminder ? (
    <View style={styles.MedicineContainer}>
      <View style={styles.topText}>
        <Text style={styles.helloText}> Hello, {userInfo.name}</Text>
        <Image style={styles.image2} resizeMode="contain" source={image2} />
      </View>
      <Text style={styles.plainText}>Let's check your plan today</Text>
      <Calendar />
      <View style={styles.middleText}>
        <Text style={styles.takeText}>To Take</Text>
        <View style={styles.middleBorder}>
          <TouchableOpacity>
            <Text style={styles.allText}>All</Text>
          </TouchableOpacity>
          <Image style={styles.image4} resizeMode="contain" source={image4} />
        </View>
      </View>
      <FlatList
        data={allMedicineData}
        keyExtractor={(item) => item._id}
        renderItem={renderReminderItem}
      />
    </View>
  ) : (
    <Reminder
      navigation={navigation}
      hideReminder={handleHideReminder}
      reminderData={reminderData}
    />
  );
}

const styles = StyleSheet.create({
  MedicineContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },
  helloText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  image2: {
    height: 41,
    width: 41,
  },
  plainText: {
    fontSize: 16,
    marginBottom: 10,
  },
  middleText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 23,
  },
  takeText: {
    fontSize: 26,
    fontWeight: "600",
  },
  middleBorder: {
    backgroundColor: "#D9D9D9",
    width: 63,
    height: 31,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image4: {
    height: 21,
    width: 31,
  },
  reminderBoxContainer: {
    position: "relative",
    marginBottom: 15,
  },
  reminderBox: {
    backgroundColor: "#D9D9D9",
    width: "90%",
    borderRadius: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    position: "relative",
  },
  imageCircle: {
    height: 79,
    width: 84,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    marginRight: 35,
    alignItems: "center",
  },
  image5: {
    height: 50,
    width: 80,
    marginTop: 15,
  },
  reminderText: {
    flex: 1,
  },
  pillText: {
    fontSize: 17,
    fontWeight: "700",
  },
  medicineText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "600",
  },
  doseContainer: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doseTime: {
    fontSize: 16,
    color: "#000000",
    marginRight: 10,
  },
  doseMealTiming: {
    fontSize: 16,
    color: "#000000",
  },
  deleteIconContainer: {
    position: "absolute",
    right: 10,
    top: 30,
    backgroundColor: "#FFFFFF",
    padding: 2,
    borderRadius: 50,
  },
});
