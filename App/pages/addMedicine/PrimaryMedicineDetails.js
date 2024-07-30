
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import image6 from '../../assets/images/image6.png';
import capsule from '../../assets/images/capsule.png';
import Tablets from '../../assets/images/Tablets.png';
import Injection from '../../assets/images/Injection.png';
import Syrup from '../../assets/images/Syrup.png';

const medicines = [
  {
    id: 1,
    image: capsule,
    name: "Capsule"
  },
  {
    id: 2,
    image: Tablets,
    name: "Tablets",
  },
  {
    id: 3,
    image: Injection,
    name: "Injection",
  },
  {
    id: 4,
    image: Syrup,
    name: "Syrup",
  },
];

export default function PrimaryMedicineDetails({
  setActiveView,
  fetchMedicine,
  medicineName,
  setMedicineName,
  selectedMedicine,
  setSelectedMedicine,
  amount,
  setAmount,
  userId,
}) {

 

  const handleNext = async () => {
    if (!medicineName || !selectedMedicine || !amount) {
      Alert.alert("Please fill all the fields");
      return;
    } else {
      console.log("User ID:", userId);
      fetchMedicine();
      setActiveView("SecondaryMedicineDetails");
    }

  }


  const incrementAmount = () => {
    setAmount(amount + 1);
  }

  const decrementAmount = () => {
    if (amount > 0)
      setAmount(amount - 1);
  }

  return (
    <View style={styles.PrimaryMedicineContainer}>
      <Image source={image6} resizeMode='cover' style={styles.image6} />
      <View style={styles.medicineNameInput}>
        <Text style={styles.medicineNameLabel}>Name of the Medicine</Text>
        <TextInput
          style={styles.NameInput}
          value={medicineName}
          onChangeText={setMedicineName}
        />
      </View>
      <View style={styles.medTypeContainer}>
        <Text style={styles.medTypeLabel}>Choose from your med</Text>
        <View style={styles.medTypes}>
          {medicines.map((medicine) => (
            <TouchableOpacity
              key={medicine.name}
              style={[
                styles.medTypeBox,
                selectedMedicine === medicine.name && styles.selectedMedTypeBox,
              ]}
              onPress={() => setSelectedMedicine(medicine.name)}
            >
              <Image source={medicine.image} resizeMode='contain' style={styles.medTypeImage} />
              <Text style={styles.medTypeName}>{medicine.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.medicineAmount}>
        <Text style={styles.medicineAmountLabel}>Amount</Text>
      </View>
      <View style={styles.medicineAmountContainer}>
        <TouchableOpacity onPress={decrementAmount} style={styles.amountIcon}>
          <Icon name="remove" type="material" size={25} color="#555" />
        </TouchableOpacity>
        <View style={styles.line}></View>
        <Text style={styles.amountText}>{amount}</Text>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={incrementAmount} style={styles.amountIcon}>
          <Icon name="add" type="material" size={25} color="#555" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  PrimaryMedicineContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  image6: {
    width: 290,
    height: 160,
    marginBottom: 15,
  },
  medicineNameInput: {
    width: '100%',
    marginBottom: 20,
  },
  medicineNameLabel: {
    fontSize: 15,
    marginBottom: 10,
    color: '#D9D9D9',
  },
  NameInput: {
    width: '100%',
    height: 47,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    color: '#000',
  },
  medTypeContainer: {
    width: '100%',
  },
  medTypeLabel: {
    fontSize: 15,
    marginBottom: 12,
    color: '#D9D9D9'
  },
  medTypes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  medTypeBox: {
    backgroundColor: "#D9D9D9",
    width: 66,
    height: 74,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedMedTypeBox: {
    backgroundColor: '#20B2AA',
  },
  medTypeImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  medTypeName: {
    fontSize: 12,
    color: '#000',
  },
  medicineAmount: {
    width: '100%',
    marginTop: 20,
  },
  medicineAmountLabel: {
    fontSize: 15,
    marginBottom: 12,
    color: '#D9D9D9'
  },
  medicineAmountContainer: {
    backgroundColor: "#D9D9D9",
    width: 351,
    height: 47,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
  },
  amountIcon: {
    padding: 5,
  },
  amountText: {
    fontSize: 27,
    marginHorizontal: 20,
  },
  line: {
    height: '50%',
    width: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#205278",
    width: 278,
    height: 61,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: "600",
  },
});









 





 



