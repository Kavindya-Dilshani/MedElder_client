import React, { useContext, useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../utilities/auth/AuthContext';
import PrimaryMedicineDetails from '../../pages/addMedicine/PrimaryMedicineDetails';
import SecondaryMedicineDetails from '../../pages/finalAddMedicine/SecondaryMedicineDetails';
import Medicine from '../../pages/medicine/Medicine';

const AddMedicine = () => {
  const { userInfo } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const { userId } = user;
  // const [medicineData, setMedicineData] = useState([
  //   userId,
  //   medicineName,
  //   selectedMedicine,
  //   amount,
  //   frequency,
  //   times,
  //   selectedTab,
  //   reminder
  // ]);
  const [medicineName, setMedicineName] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [amount, setAmount] = useState(0);
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [times, setTimes] = useState([
    { id: 1, time: null, selectedTab: 0 },
    { id: 2, time: null, selectedTab: 1 },
    { id: 3, time: null, selectedTab: 0 },
  ]);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("time");
  const [currentDoseIndex, setCurrentDoseIndex] = useState(0);
  const [reminder, setReminder] = useState("");
  const [selectedTab, setSelectedTab] = useState(false);
  const [activeView, setActiveView] = useState("PrimaryMedicineDetails");


  /** This function used to fetch medicine data from the backend */

  const fetchMedicine = useCallback(() => {
    const headers = { "Content-Type": "application/json" };
    const request = {
      userId,
      medicineName,
      selectedMedicine,
      amount,
      frequency,
      times,
      selectedTab,
      reminder
    };
    axios
      .post('http://192.168.8.104:5001/api/medicine', request, { headers })
      .then((response) => {
        console.log(response.data);
        setMedicineData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    setUser(userInfo);
    // fetchMedicine();
  }, [userInfo]);

  return (
    <View>
      <>
        {activeView === 'PrimaryMedicineDetails' && (
          <PrimaryMedicineDetails
            user={user}
            setActiveView={setActiveView}
            fetchMedicine={fetchMedicine}
            medicineName={medicineName}
            setMedicineName={setMedicineName}
            selectedMedicine={selectedMedicine}
            setSelectedMedicine={setSelectedMedicine}
            amount={amount}
            setAmount={setAmount}
          />
        )}
        {activeView === 'SecondaryMedicineDetails' && (
          <SecondaryMedicineDetails
            user={user}
            setActiveView={setActiveView}
            handleFunction={fetchMedicine}
            selectedFrequency={selectedFrequency}
            setSelectedFrequency={setSelectedFrequency}
            times={times}
            setTimes={setTimes}
            show={show}
            setShow={setShow}
            mode={mode}
            setMode={setMode}
            currentDoseIndex={currentDoseIndex}
            setCurrentDoseIndex={setCurrentDoseIndex}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            reminder={reminder}
            setReminder={setReminder}
          />
        )}
        {activeView === "Medicine" && (
          <Medicine setActiveView={setActiveView} />
        )}
      </>
    </View>
  );
};

export default AddMedicine;


