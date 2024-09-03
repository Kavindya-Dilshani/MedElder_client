
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import image7 from "../../assets/images/image7.png";
import { AuthContext } from "../../utilities/auth/AuthContext";
import * as Speech from "expo-speech";

export default function Reminder({ hideReminder, reminderData = [] }) {
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    let isSpeaking = true;

    if (reminderData.length === 0) return;

    // Group reminders by time
    const groupedReminders = reminderData.reduce((acc, reminder) => {
      if (!acc[reminder.time]) {
        acc[reminder.time] = [];
      }
      acc[reminder.time].push(reminder.medicineName);
      return acc;
    }, {});

    const getReminderText = () => {
      return `Hi ${userInfo.name}, it's your medicine time. ${Object.entries(
        groupedReminders
      )
        .map(
          ([time, medicines]) =>
            `It's ${time}. Take your ${medicines.join(", ")}.`
        )
        .join(" ")}`;
    };

    const speakReminders = () => {
      if (isSpeaking) {
        const reminderText = getReminderText();
        Speech.speak(reminderText, {
          language: "en",
          pitch: 1,
          rate: 1,
          onDone: () => {
            if (isSpeaking) {
              speakReminders(); // Repeat the speech after it finishes
            }
          },
        });
      }
    };

    speakReminders();

    return () => {
      isSpeaking = false;
      Speech.stop(); // Stop the speech when the component unmounts
    };
  }, [reminderData]);

  const handleStopReminder = () => {
    hideReminder();
    Speech.stop(); // Stop the speech when the user presses the button
  };

  return (
    reminderData?.length > 0 && (
      <View style={styles.ReminderContainer}>
        <Image
          style={styles.ReminderImage}
          resizeMode="contain"
          source={image7}
        />
        <Text style={styles.ReminderMessage}>
          Hey {userInfo.name}, take your medicine
        </Text>
        {Object.entries(
          reminderData.reduce((acc, reminder) => {
            if (!acc[reminder.time]) {
              acc[reminder.time] = [];
            }
            acc[reminder.time].push(reminder.medicineName);
            return acc;
          }, {})
        ).map(([time, medicines]) => (
          <View style={styles.MainReminderBox} key={time}>
            <Text style={styles.ReminderTime}>{time}</Text>
            <Text style={styles.ReminderMedicineName}>
              {medicines.join(", ")}
            </Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.ReminderButton}
          onPress={handleStopReminder}
        >
          <Text style={styles.ReminderButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  ReminderContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start", // Align items to the top
  },
  ReminderImage: {
    width: 354,
    height: 290,
    marginBottom: 20, // Reduce the space below the image
  },
  ReminderMessage: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10, // Add margin to move it down from the image
    marginBottom: 10, // Adjust the space below the message
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
    marginBottom: 20, // Adjust the space between reminder boxes
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
    textAlign: "center",
  },
  ReminderButton: {
    backgroundColor: "#205278",
    borderRadius: 35,
    padding: 10,
    width: 250,
    height: 62,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // Add space above the button
  },
  ReminderButtonText: {
    fontSize: 32,
    color: "#ffff",
    fontWeight: "600",
    textAlign: "center",
  },
});

