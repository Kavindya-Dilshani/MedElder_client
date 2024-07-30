
import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../utilities/auth/AuthContext';
import PrimaryMedicineDetails from '../../pages/addMedicine/PrimaryMedicineDetails';
import SecondaryMedicineDetails from '../../pages/finalAddMedicine/SecondaryMedicineDetails';
import Medicine from '../../pages/medicine/Medicine';

const AddMedicine = () => {
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
  const [medicineData, setMedicineData] = useState(null);
  const [activeView, setActiveView] = useState("PrimaryMedicineDetails");

  const fetchMedicine = async () => {
    try {
      const userId = userInfo.user?.userId;
      console.log("User ID in fetchMedicine:", userId);
      const response = await axios.post('http://192.168.8.100:5001/api/medicine', {
        userId,
        medicineName,
        selectedMedicine,
        amount,
        frequency,
       doses,
        reminder
      }, {
        headers: { "Content-Type": "application/json" }
      });
      setMedicineData(response.data);
    } catch (error) {
      console.error('Error adding medicine data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <View>
      {activeView === 'PrimaryMedicineDetails' && (
        <PrimaryMedicineDetails
          setActiveView={setActiveView}
          fetchMedicine={fetchMedicine}
          medicineName={medicineName}
          setMedicineName={setMedicineName}
          selectedMedicine={selectedMedicine}
          setSelectedMedicine={setSelectedMedicine}
          amount={amount}
          setAmount={setAmount}
          userId={userInfo.user?.userId} 
        />
      )}
      {activeView === 'SecondaryMedicineDetails' && (
        <SecondaryMedicineDetails
          setActiveView={setActiveView}
          fetchMedicine={fetchMedicine}
          frequency={frequency}
          setFrequency={setFrequency}
          doses={doses}
          setDoses={setDoses}
          reminder={reminder}
          setReminder={setReminder}
          userId={userInfo.user?.userId} 
        />
      )}
      {activeView === "Medicine" && (
        <Medicine setActiveView={setActiveView} />
      )}
    </View>
  );
};

export default AddMedicine;
