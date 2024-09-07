import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import image7 from "../../assets/images/image7.png";
import { AuthContext } from "../../utilities/auth/AuthContext";
import * as Speech from "expo-speech";

export default function Reminder({ hideReminder, reminderData = [] }) {
  const { userInfo } = useContext(AuthContext);

  // Use the useEffect hook to handle speech reminders
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

    // Define a function to get the reminder text
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

    // Define a function to speak the reminders
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

    // Start speaking the reminders
    speakReminders();

    return () => {
      isSpeaking = false;
      Speech.stop(); // Stop the speech when the component unmounts
    };
  }, [reminderData]);

  // Define a function to handle stopping the reminder
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
    justifyContent: "flex-start",
  },
  ReminderImage: {
    width: 354,
    height: 290,
    marginBottom: 20,
  },
  ReminderMessage: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 20,
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
    marginTop: 10,
  },
  ReminderButtonText: {
    fontSize: 32,
    color: "#ffff",
    fontWeight: "600",
    textAlign: "center",
  },
});
// import React, { useContext, useEffect, useState } from "react";
// import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
// import image7 from "../../assets/images/image7.png";
// import { AuthContext } from "../../utilities/auth/AuthContext";
// import * as Speech from "expo-speech";
// import moment from "moment"; // Add moment for date handling

// export default function Reminder({ hideReminder, reminderData = [] }) {
//   const { userInfo } = useContext(AuthContext);
//   const [filteredReminders, setFilteredReminders] = useState([]);

//   useEffect(() => {
//     // Get current date and format it
//     const currentDate = moment().format("YYYY-MM-DD");

//     // Filter reminders for the current day
//     const todaysReminders = reminderData.filter((reminder) => {
//       const reminderDate = moment(reminder.date).format("YYYY-MM-DD"); // Assuming reminders have a 'date' field
//       return reminderDate === currentDate;
//     });

//     setFilteredReminders(todaysReminders);

//     // Group reminders by time
//     const groupedReminders = todaysReminders.reduce((acc, reminder) => {
//       if (!acc[reminder.time]) {
//         acc[reminder.time] = [];
//       }
//       acc[reminder.time].push(reminder.medicineName);
//       return acc;
//     }, {});

//     // Define a function to get the reminder text
//     const getReminderText = () => {
//       return `Hi ${userInfo.name}, it's your medicine time. ${Object.entries(
//         groupedReminders
//       )
//         .map(
//           ([time, medicines]) =>
//             `It's ${time}. Take your ${medicines.join(", ")}.`
//         )
//         .join(" ")}`;
//     };

//     // Define a function to speak the reminders
//     const speakReminders = () => {
//       const reminderText = getReminderText();
//       Speech.speak(reminderText, {
//         language: "en",
//         pitch: 1,
//         rate: 1,
//         onDone: () => {
//           speakReminders(); // Repeat the speech after it finishes
//         },
//       });
//     };

//     // Start speaking the reminders
//     if (todaysReminders.length > 0) {
//       speakReminders();
//     }

//     return () => {
//       Speech.stop(); // Stop the speech when the component unmounts
//     };
//   }, [reminderData, userInfo.name]);

//   // Define a function to handle stopping the reminder
//   const handleStopReminder = () => {
//     hideReminder();
//     Speech.stop(); // Stop the speech when the user presses the button
//   };

//   return (
//     filteredReminders?.length > 0 && (
//       <View style={styles.ReminderContainer}>
//         <Image
//           style={styles.ReminderImage}
//           resizeMode="contain"
//           source={image7}
//         />
//         <Text style={styles.ReminderMessage}>
//           Hey {userInfo.name}, take your medicine
//         </Text>
//         {Object.entries(
//           filteredReminders.reduce((acc, reminder) => {
//             if (!acc[reminder.time]) {
//               acc[reminder.time] = [];
//             }
//             acc[reminder.time].push(reminder.medicineName);
//             return acc;
//           }, {})
//         ).map(([time, medicines]) => (
//           <View style={styles.MainReminderBox} key={time}>
//             <Text style={styles.ReminderTime}>{time}</Text>
//             <Text style={styles.ReminderMedicineName}>
//               {medicines.join(", ")}
//             </Text>
//           </View>
//         ))}
//         <TouchableOpacity
//           style={styles.ReminderButton}
//           onPress={handleStopReminder}
//         >
//           <Text style={styles.ReminderButtonText}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   );
// }

// const styles = StyleSheet.create({
//   ReminderContainer: {
//     flex: 1,
//     padding: 20,
//     alignItems: "center",
//     backgroundColor: "#fff",
//     justifyContent: "flex-start",
//   },
//   ReminderImage: {
//     width: 354,
//     height: 290,
//     marginBottom: 20,
//   },
//   ReminderMessage: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   MainReminderBox: {
//     width: "80%",
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: "#f8f8f8",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   ReminderTime: {
//     fontSize: 21,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   ReminderMedicineName: {
//     fontSize: 21,
//     color: "#555",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   ReminderButton: {
//     backgroundColor: "#205278",
//     borderRadius: 35,
//     padding: 10,
//     width: 250,
//     height: 62,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   ReminderButtonText: {
//     fontSize: 32,
//     color: "#ffff",
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });

// // // import React, { useContext, useEffect, useState } from "react";
// // // import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
// // // import image7 from "../../assets/images/image7.png";
// // // import { AuthContext } from "../../utilities/auth/AuthContext";
// // // import * as Speech from "expo-speech";
// // // import moment from "moment";

// // // export default function Reminder({ hideReminder, reminderData = [] }) {
// // //   const { userInfo } = useContext(AuthContext);
// // //   const [filteredReminders, setFilteredReminders] = useState([]);

// //   useEffect(() => {
// //     // Get current date and format it
// //     const currentDate = moment().format("YYYY-MM-DD");

// //     // Filter reminders for the current day
// //     const todaysReminders = reminderData.filter((reminder) => {
// //       const reminderDate = moment(reminder.date).format("YYYY-MM-DD"); // Assuming reminders have a 'date' field
// //       return reminderDate === currentDate;
// //     });

// //     setFilteredReminders(todaysReminders);

// //     if (todaysReminders.length === 0) return;

// //     // Group reminders by time
// //     const groupedReminders = todaysReminders.reduce((acc, reminder) => {
// //       if (!acc[reminder.time]) {
// //         acc[reminder.time] = [];
// //       }
// //       acc[reminder.time].push(reminder.medicineName);
// //       return acc;
// //     }, {});

// //     // Define a function to get the reminder text
// //     const getReminderText = () => {
// //       return `Hi ${userInfo.name}, it's your medicine time. ${Object.entries(
// //         groupedReminders
// //       )
// //         .map(
// //           ([time, medicines]) =>
// //             `It's ${time}. Take your ${medicines.join(", ")}.`
// //         )
// //         .join(" ")}`;
// //     };

// //     // Define a function to speak the reminders
// //     const speakReminders = () => {
// //       const reminderText = getReminderText();
// //       Speech.speak(reminderText, {
// //         language: "en",
// //         pitch: 1,
// //         rate: 1,
// //         onDone: () => {
// //           speakReminders(); // Repeat the speech after it finishes
// //         },
// //       });
// //     };

// //     // Start speaking the reminders
// //     speakReminders();

// //     return () => {
// //       Speech.stop(); // Stop the speech when the component unmounts
// //     };
// //   }, [reminderData, userInfo.name]);

// //   // Define a function to handle stopping the reminder
// //   const handleStopReminder = () => {
// //     hideReminder();
// //     Speech.stop(); // Stop the speech when the user presses the button
// //   };

// //   return (
// //     filteredReminders?.length > 0 && (
// //       <View style={styles.ReminderContainer}>
// //         <Image
// //           style={styles.ReminderImage}
// //           resizeMode="contain"
// //           source={image7}
// //         />
// //         <Text style={styles.ReminderMessage}>
// //           Hey {userInfo.name}, take your medicine
// //         </Text>
// //         {Object.entries(
// //           filteredReminders.reduce((acc, reminder) => {
// //             if (!acc[reminder.time]) {
// //               acc[reminder.time] = [];
// //             }
// //             acc[reminder.time].push(reminder.medicineName);
// //             return acc;
// //           }, {})
// //         ).map(([time, medicines]) => (
// //           <View style={styles.MainReminderBox} key={time}>
// //             <Text style={styles.ReminderTime}>{time}</Text>
// //             <Text style={styles.ReminderMedicineName}>
// //               {medicines.join(", ")}
// //             </Text>
// //           </View>
// //         ))}
// //         <TouchableOpacity
// //           style={styles.ReminderButton}
// //           onPress={handleStopReminder}
// //         >
// //           <Text style={styles.ReminderButtonText}>OK</Text>
// //         </TouchableOpacity>
// //       </View>
// //     )
// //   );
// // }

// // const styles = StyleSheet.create({
// //   ReminderContainer: {
// //     flex: 1,
// //     padding: 20,
// //     alignItems: "center",
// //     backgroundColor: "#fff",
// //     justifyContent: "flex-start",
// //   },
// //   ReminderImage: {
// //     width: 354,
// //     height: 290,
// //     marginBottom: 20,
// //   },
// //   ReminderMessage: {
// //     fontSize: 18,
// //     textAlign: "center",
// //     marginTop: 10,
// //     marginBottom: 10,
// //   },
// //   MainReminderBox: {
// //     width: "80%",
// //     padding: 20,
// //     borderRadius: 10,
// //     backgroundColor: "#f8f8f8",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 5,
// //     elevation: 3,
// //     marginBottom: 20,
// //     alignItems: "center",
// //   },
// //   ReminderTime: {
// //     fontSize: 21,
// //     fontWeight: "bold",
// //     marginBottom: 10,
// //   },
// //   ReminderMedicineName: {
// //     fontSize: 21,
// //     color: "#555",
// //     fontWeight: "bold",
// //     textAlign: "center",
// //   },
// //   ReminderButton: {
// //     backgroundColor: "#205278",
// //     borderRadius: 35,
// //     padding: 10,
// //     width: 250,
// //     height: 62,
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: 10,
// //   },
// //   ReminderButtonText: {
// //     fontSize: 32,
// //     color: "#ffff",
// //     fontWeight: "600",
// //     textAlign: "center",
// //   },
// // });
