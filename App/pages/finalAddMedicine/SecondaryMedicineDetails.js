import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Calendar from "../../components/calender/Calender";
import { format } from "date-fns";

// Define frequency constants
const ONCE = "once";
const TWICE = "twice";
const THRICE = "thrice";

export default function SecondaryMedicineDetails({
  fetchMedicine,
  frequency,
  setFrequency,
  doses,
  setDoses,
  reminder,
  setReminder,
  userId,
}) {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("time");
  const [currentDoseIndex, setCurrentDoseIndex] = useState(0);

  useEffect(() => {
    const initializeDoses = () => {
      let numDoses = 0;
      switch (frequency) {
        case ONCE:
          numDoses = 1;
          break;
        case TWICE:
          numDoses = 2;
          break;
        case THRICE:
          numDoses = 3;
          break;
        default:
          numDoses = 0;
      }

      let initialDoses = [];
      for (let i = 0; i < numDoses; i++) {
        initialDoses.push({ time: "", mealTiming: 0 });
      }
      setDoses(initialDoses);
    };

    initializeDoses();
  }, [frequency]);

  const onChange = (selectedTime) => {
    const formattedTime = format(selectedTime, "h:mm a");
    const newDoses = doses.map((dose, idx) =>
      idx === currentDoseIndex ? { ...dose, time: formattedTime } : dose
    );
    setDoses(newDoses);
    setShow(false);
  };

  const handleDaySelect = (selectedDay) => {
    setReminder(selectedDay);
  };

  const showMode = (modeToShow, index) => {
    setShow(true);
    setMode(modeToShow);
    setCurrentDoseIndex(index);
  };

  const handleSwitchButtonPress = (doseIndex, mealTiming) => {
    const newDoses = doses.map((dose, idx) =>
      idx === doseIndex ? { ...dose, mealTiming } : dose
    );
    setDoses(newDoses);
  };

  const handleSave = async () => {
    if (!frequency || !doses) {
      Alert.alert("Please fill all the fields");
      return;
    } else {
      fetchMedicine();
    }
  };

  const handleFrequencyChange = (text) => {
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText === ONCE) {
      setFrequency(ONCE);
    } else if (lowerCaseText === TWICE) {
      setFrequency(TWICE);
    } else if (lowerCaseText === THRICE) {
      setFrequency(THRICE);
    } else {
      setFrequency(""); // Use an empty string or any default value that makes sense
    }
  };

  const renderDoseTimePicker = (index, enabled) => {
    const doseLabels = ["First", "Second", "Third"];
    const doseTime = doses[index]?.time;

    return (
      <View key={index} style={styles.timeInput}>
        <Text style={styles.timeLabel}>
          Set time of {doseLabels[index]} dose
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={[styles.timeBorderBox, !enabled && styles.disabledBox]}
            onPress={() => enabled && showMode("time", index)}
            disabled={!enabled}
          >
            <Text style={[styles.timeText, !enabled && styles.disabledText]}>
              {doseTime ? doseTime : "00:00"}
            </Text>
          </TouchableOpacity>
          {show && currentDoseIndex === index && (
            <DateTimePickerModal
              isVisible={show}
              mode={mode}
              onConfirm={onChange}
              onCancel={() => setShow(false)}
            />
          )}
        </View>
        <View style={styles.switchButtonContainer}>
          <View style={styles.switchButtonBorderBox}>
            <TouchableOpacity
              style={[
                styles.switchButton,
                doses[index]?.mealTiming === 0 && styles.activeButton,
                !enabled && styles.disabledBox,
              ]}
              onPress={() => enabled && handleSwitchButtonPress(index, 0)}
              disabled={!enabled}
            >
              <Text
                style={[
                  styles.switchButtonText,
                  !enabled && styles.disabledText,
                ]}
              >
                Before meal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.switchButton,
                doses[index]?.mealTiming === 1 && styles.activeButton,
                !enabled && styles.disabledBox,
              ]}
              onPress={() => enabled && handleSwitchButtonPress(index, 1)}
              disabled={!enabled}
            >
              <Text
                style={[
                  styles.switchButtonText,
                  !enabled && styles.disabledText,
                ]}
              >
                After meal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.AddMedicine2Container}>
      <View style={styles.dropDownNameInput}>
        <Text style={styles.dropDownNameLabel}>How often did you take</Text>
      </View>
      <View style={styles.frequencyInputContainer}>
        <TextInput
          style={styles.frequencyInput}
          placeholder="Enter Frequency"
          onChangeText={handleFrequencyChange}
        />
      </View>
      {renderDoseTimePicker(
        0,
        frequency === ONCE || frequency === TWICE || frequency === THRICE
      )}
      {renderDoseTimePicker(1, frequency === TWICE || frequency === THRICE)}
      {renderDoseTimePicker(2, frequency === THRICE)}
      <Text style={styles.reminderText}>Reminder</Text>
      <View style={styles.calendarContainer}>
        <Calendar showDates={false} handleDateSelect={handleDaySelect} />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  AddMedicine2Container: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
    backgroundColor: "#FFFFFF",
  },
  dropDownNameInput: {
    width: "110%",
    marginBottom: 8,
  },
  dropDownNameLabel: {
    fontSize: 15,
    marginBottom: 2,
    color: "#D9D9D9",
  },
  frequencyInputContainer: {
    width: "85%",
    height: 47,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },
  frequencyInput: {
    textAlign: "center",
    color: "#000000",
    fontSize: 18,
  },
  timeInput: {
    width: "110%",
    marginTop: 8,
  },
  timeLabel: {
    fontSize: 15,
    marginBottom: 5,
    color: "#D9D9D9",
  },
  timeBorderBox: {
    width: "80%",
    height: 47,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 22,
    textAlign: "center",
  },
  switchButtonContainer: {
    width: "100%",
    marginTop: 8,
    alignItems: "center",
  },
  switchButtonBorderBox: {
    width: "60%",
    height: 29,
    borderWidth: 0.5,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  switchButton: {
    width: "48%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#20B2AA",
  },
  switchButtonText: {
    color: "#000000",
    fontSize: 15,
    textAlign: "center",
  },
  disabledBox: {
    backgroundColor: "#E0E0E0",
  },
  disabledText: {
    color: "#A0A0A0",
  },
  reminderText: {
    fontSize: 15,
    color: "#D9D9D9",
    width: "110%",
    marginBottom: 4,
  },
  calendarContainer: {
    marginBottom: 3,
    width: "100%",
  },
  saveButton: {
    marginTop: 6,
    backgroundColor: "#205278",
    width: 278,
    height: 61,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
