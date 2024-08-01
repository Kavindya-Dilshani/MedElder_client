// import { View, Text } from 'react-native'
// import React,{useEffect} from 'react'
// import * as Speech from 'expo-speech';
// import { format } from 'date-fns';




// const VoiceReminder = ({ navigation ,allMedicineData}) => {
//     useEffect(() => {
//         const checkReminders = setInterval(() => {
//           const currentTime = format(new Date(), 'HH:mm'); // Format current time as 'HH:mm'
          
//           allMedicineData.forEach((medicine) => {
//             medicine.doses.forEach((dose) => {
//               if (dose.time === currentTime) {
//                 // Navigate to the Reminder page and pass the medicine details
//                 navigation.navigate('Reminder', { item: medicine, dose });
//                 // Use TTS to announce the reminder
//                 Speech.speak(`Now ${currentTime}, take your ${medicine.medicineName} ${medicine.selectedMedicine}`);
//               }
//             });
//           });
//         }, 60000); 
    
//         return () => clearInterval(checkReminders);
//     }, [allMedicineData, navigation]);
  
//     return null; 
//   };


// export default VoiceReminder;

// // VoiceReminder.js
// import React, { useEffect } from "react";
// import { View } from "react-native";
// import * as Speech from 'expo-speech';
// import { format } from 'date-fns';

// const VoiceReminder = ({ doses, medicineName }) => {
//   useEffect(() => {
//     const checkTimeAndSpeak = () => {
//       const currentTime = format(new Date(), 'HH:mm');

//       doses.forEach(dose => {
//         if (dose.time === currentTime) {
//             // navigation.navigate('Reminder', { medicineName,doses });
//           const message = `Now ${dose.time}, take your ${medicineName} pill`;
//           console.log(`Speaking message: ${message}`);
//           Speech.speak(message);
//         }
//       });
//     };

//     // Run checkTimeAndSpeak immediately to catch any matches at startup
//     checkTimeAndSpeak();

//     // Set up an interval to check every minute
//     const interval = setInterval(checkTimeAndSpeak, 60000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [doses, medicineName]);

//   return <View />;
// };

// export default VoiceReminder;

// import * as React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import * as Speech from 'expo-speech';

// export default function VoiceReminder() {
//   const speak = () => {
//     const thingToSay = 'Now 2 p.m. Take your vitamin C pill';
//     Speech.speak(thingToSay);
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Press to hear some words" onPress={speak} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
// });

