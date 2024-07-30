import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import axios from "axios";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import Calendar from "../../components/calender/Calender";
import { AuthContext } from "../../utilities/auth/AuthContext";

export default function Medicine() {
  const [allMedicineData, setAllMedicineData] = useState([]);
  const { userInfo } = useContext(AuthContext);

  const getAllMedicine = async () => {
    try {
      const response = await axios.get(
        "http://192.168.8.100:5001/api/medicine"
      );
      setAllMedicineData(response.data);
    } catch (error) {
      console.error("Error fetching medicine data:", error);
    }
  };

  useEffect(() => {
    getAllMedicine();
  }, []);

  const renderDoseDetails = (doses) => {
    return doses.map((dose, index) => (
      <View key={index} style={styles.doseContainer}>
        <Text style={styles.doseTime}>{dose.time}</Text>
        <Text style={styles.doseMealTiming}>
          {dose.mealTiming === 0 ? "Before meal" : "After meal"}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.MedicineContainer}>
      <View style={styles.topText}>
        <Text style={styles.helloText}>Hello, {userInfo.user.name}</Text>
        <Image style={styles.image2} resizeMode="contain" source={image2} />
      </View>
      <Text style={styles.plainText}>Let's check your plan today</Text>
      <Calendar />
      <View style={styles.middleText}>
        <Text style={styles.takeText}>To Take</Text>
        <View style={styles.middleBorder}>
          <Text style={styles.allText}>All</Text>
          <Image style={styles.image4} resizeMode="contain" source={image4} />
        </View>
      </View>
      <FlatList
        data={allMedicineData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.reminderBox}>
            <View style={styles.imageCircle}>
              <Image
                style={styles.image5}
                resizeMode="contain"
                source={image5}
              />
            </View>
            <View style={styles.reminderText}>
              <Text style={styles.pillText}>
                {item.amount} {item.selectedMedicine}
              </Text>
              <Text style={styles.medicineText}>{item.medicineName}</Text>
              {renderDoseDetails(item.doses)}
            </View>
          </View>
        )}
      />
    </View>
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
  reminderBox: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    borderRadius: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
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
    justifyContent: "space-center",
  },
  doseTime: {
    fontSize: 16,
    color: "#000000",
    marginRight: 10,
  },
  doseMealTiming: {
    fontSize: 13,
    color: "#555",
  },
});
