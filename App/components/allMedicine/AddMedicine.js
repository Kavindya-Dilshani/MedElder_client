import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { AuthContext } from "../../utilities/auth/AuthContext";
import PrimaryMedicineDetails from "../../pages/addMedicine/PrimaryMedicineDetails";
import SecondaryMedicineDetails from "../../pages/finalAddMedicine/SecondaryMedicineDetails";

const AddMedicine = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const [medicineName, setMedicineName] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [amount, setAmount] = useState(0);

  const [frequency, setFrequency] = useState("");
  const [doses, setDoses] = useState([
    { time: "", mealTiming: false },
    { time: "", mealTiming: false },
    { time: "", mealTiming: false },
  ]);
  const [reminder, setReminder] = useState("");
  const [activeView, setActiveView] = useState("PrimaryMedicineDetails");

  return (
    <View>
      {activeView === "PrimaryMedicineDetails" && (
        <PrimaryMedicineDetails
          setActiveView={setActiveView}
          medicineName={medicineName}
          setMedicineName={setMedicineName}
          selectedMedicine={selectedMedicine}
          setSelectedMedicine={setSelectedMedicine}
          amount={amount}
          setAmount={setAmount}
          userId={userInfo.userId}
        />
      )}
      {activeView === "SecondaryMedicineDetails" && (
        <SecondaryMedicineDetails
          setActiveView={setActiveView}
          frequency={frequency}
          setFrequency={setFrequency}
          doses={doses}
          setDoses={setDoses}
          reminder={reminder}
          setReminder={setReminder}
          userId={userInfo.userId}
          medicineName={medicineName}
          selectedMedicine={selectedMedicine}
          amount={amount}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default AddMedicine;
