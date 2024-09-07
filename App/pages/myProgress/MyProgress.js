// // import React, { useState } from "react";
// // import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
// // import { FontAwesome } from "@expo/vector-icons";
// // import AntDesign from "@expo/vector-icons/AntDesign";
// // // import Share from 'react-native-share';

// // const MyProgress = ({navigation}) => {
// //   // State to keep track of the selected button
// //   const [selectedButton, setSelectedButton] = useState('Past 7 Days');

// //   // Function to handle button press
// //   const handleButtonPress = (buttonName) => {
// //     setSelectedButton(buttonName);
// //   };

// // //  // Function to handle share button press
// // //  const myCustomShare = async () => {
// // //   const shareOptions = {
// // //     message: 'Check out my medication progress! Here’s a summary of my medication stats.',
// // //   }
// // //   try {
// // //     const shareResponses= await Share.open(shareOptions);
// // //   } catch (error) {
// // //     console.error('Error sharing:', error.message);
// // //   }
// // // };
// //   return (
// //     <View style={styles.myProgressContainer}>
// //       <View style={styles.myProgressHeader}>
// //         <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
// //           <Text style={styles.myProgressBackText}>Back</Text>
// //         </TouchableOpacity>
// //         <Text style={styles.myProgressHeaderText}>Progress</Text>
// //         <TouchableOpacity>
// //           <AntDesign name="sharealt" size={24} color="black" />
// //         </TouchableOpacity>
// //       </View>
// //       <View style={styles.myProgressContentBox}>
// //         <View style={styles.myProgressToggleButtons}>
// //           <TouchableOpacity
// //             style={[
// //               styles.myProgressToggleButton,
// //               selectedButton === 'Past 7 Days' && { backgroundColor: '#20B2AA' }
// //             ]}
// //             onPress={() => handleButtonPress('Past 7 Days')}
// //           >
// //             <Text style={[
// //               styles.myProgressToggleButtonText,
// //               selectedButton === 'Past 7 Days' && { color: '#fff' }
// //             ]}>Past 7 Days</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity
// //             style={[
// //               styles.myProgressToggleButton,
// //               selectedButton === 'Last 30 Days' && { backgroundColor: '#20B2AA' }
// //             ]}
// //             onPress={() => handleButtonPress('Last 30 Days')}
// //           >
// //             <Text style={[
// //               styles.myProgressToggleButtonText,
// //               selectedButton === 'Last 30 Days' && { color: '#fff' }
// //             ]}>Last 30 Days</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity
// //             style={[
// //               styles.myProgressToggleButton,
// //               selectedButton === 'Current' && { backgroundColor: '#20B2AA' }
// //             ]}
// //             onPress={() => handleButtonPress('Current')}
// //           >
// //             <Text style={[
// //               styles.myProgressToggleButtonText,
// //               selectedButton === 'Current' && { color: '#fff' }
// //             ]}>Current</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.progressContainer}>
// //           <Text style={styles.progressText}>Start 80 taken, 20 skipped</Text>
// //           <View style={styles.barChart} />
// //         </View>

// //         <ScrollView contentContainerStyle={styles.scrollContainer}>
// //           <View style={styles.borderedBoxContainer}>
// //             {[1, 2, 3].map((_, index) => (
// //               <View key={index} style={styles.borderedBox}>
// //                 <View style={styles.datePillsContainer}>
// //                   <Text style={styles.dateText}>01 Jan, 2024</Text>
// //                   <Text style={styles.pillsText}>4 pills</Text>
// //                 </View>
// //                 <View style={styles.progressDetails}>
// //                   <AntDesign name="checkcircle" size={20} color="green" />
// //                   <Text style={styles.detailText}>4 taken</Text>
// //                   <AntDesign name="closecircle" size={20} color="red" />
// //                   <Text style={styles.detailText}>0 skipped</Text>
// //                   <Text style={styles.completeText}>100% complete</Text>
// //                 </View>
// //               </View>
// //             ))}
// //           </View>
// //         </ScrollView>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   myProgressContainer: {
// //     flex: 1,
// //     backgroundColor: "#FFFFFF",
// //   },
// //   myProgressHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     paddingHorizontal: 15,
// //     marginTop: 30,
// //   },
// //   myProgressHeaderText: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#000",
// //     textAlign: "center",
// //   },
// //   myProgressBackText: {
// //     fontSize: 16,
// //     color: "#000",
// //   },
// //   myProgressToggleButtons: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginVertical: 15,
// //   },
// //   myProgressToggleButton: {
// //     flex: 1,
// //     paddingVertical: 10,
// //     alignItems: "center",
// //     backgroundColor: "#D9D9D9",
// //     borderRadius: 10,
// //     marginHorizontal: 5,
// //     marginBottom: 10,
// //   },
// //   myProgressToggleButtonText: {
// //     fontSize: 16,
// //   },
// //   progressContainer: {
// //     marginBottom: 25,
// //   },
// //   progressText: {
// //     fontSize: 16,
// //     marginBottom: 15,
// //   },
// //   barChart: {
// //     height: 200,
// //     backgroundColor: "#E0E0E0",
// //   },
// //   myProgressContentBox: {
// //     backgroundColor: "#fff",
// //     padding: 15,
// //     marginHorizontal: 15,
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //   },
// //   borderedBox: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 10,
// //     padding: 10,
// //     marginHorizontal: 5,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     elevation: 2,
// //     width: "100%",
// //     marginBottom: 10,
// //   },
// //   datePillsContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     width: "100%",
// //     marginBottom: 13,
// //   },
// //   dateText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   pillsText: {
// //     fontSize: 14,
// //   },
// //   progressDetails: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     width: "100%",
// //   },
// //   detailText: {
// //     fontSize: 15,
// //     marginRight: 20,
// //   },
// //   completeText: {
// //     fontSize: 15,
// //     color: "green",
// //   },
// // });

// // export default MyProgress;

// import React, { useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { BarChart } from "react-native-chart-kit";
// import { Dimensions } from "react-native";
// import Share from 'react-native-share'; // Import Share from react-native-share

// // Get screen width for chart responsiveness
// const screenWidth = Dimensions.get("window").width;

// const MyProgress = ({ navigation }) => {
//   const [selectedButton, setSelectedButton] = useState('Past 7 Days');

//   // Dummy data for charts
//   const data = {
//     'Past 7 Days': [12, 19, 3, 5, 2, 3, 10],
//     'Last 30 Days': [65, 59, 80, 81, 56, 55, 40, 60, 70, 85, 75, 90, 65, 55, 70, 80, 72, 65, 78, 90, 85, 65, 72, 78, 80, 65, 75, 85, 95, 70],
//     'Current': [30]
//   };

//   const handleButtonPress = (buttonName) => {
//     setSelectedButton(buttonName);
//   };

//   const chartData = data[selectedButton];

//   // // Function to handle share button press
//   // const handleShare = async () => {
//   //   const shareOptions = {
//   //     title: 'Share Progress',
//   //     message: `Check out my medication progress for ${selectedButton}! Here’s a summary:\n\nStart ${chartData.reduce((a, b) => a + b, 0)} taken, ${chartData.length - chartData.filter(value => value > 0).length} skipped`,
//   //     url: '', // Optionally add a URL if you want to share a link
//   //     // You can customize the share options as needed
//   //   };
//   //   try {
//   //     await Share.open(shareOptions);
//   //   } catch (error) {
//   //     console.error('Error sharing:', error.message);
//   //   }
//   // };

//   return (
//     <View style={styles.myProgressContainer}>
//       <View style={styles.myProgressHeader}>
//         <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
//           <Text style={styles.myProgressBackText}>Back</Text>
//         </TouchableOpacity>
//         <Text style={styles.myProgressHeaderText}>Progress</Text>
//         <TouchableOpacity onPress={handleShare}>
//           <AntDesign name="sharealt" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.myProgressContentBox}>
//         <View style={styles.myProgressToggleButtons}>
//           <TouchableOpacity
//             style={[
//               styles.myProgressToggleButton,
//               selectedButton === 'Past 7 Days' && { backgroundColor: '#20B2AA' }
//             ]}
//             onPress={() => handleButtonPress('Past 7 Days')}
//           >
//             <Text style={[
//               styles.myProgressToggleButtonText,
//               selectedButton === 'Past 7 Days' && { color: '#fff' }
//             ]}>Past 7 Days</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.myProgressToggleButton,
//               selectedButton === 'Last 30 Days' && { backgroundColor: '#20B2AA' }
//             ]}
//             onPress={() => handleButtonPress('Last 30 Days')}
//           >
//             <Text style={[
//               styles.myProgressToggleButtonText,
//               selectedButton === 'Last 30 Days' && { color: '#fff' }
//             ]}>Last 30 Days</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.myProgressToggleButton,
//               selectedButton === 'Current' && { backgroundColor: '#20B2AA' }
//             ]}
//             onPress={() => handleButtonPress('Current')}
//           >
//             <Text style={[
//               styles.myProgressToggleButtonText,
//               selectedButton === 'Current' && { color: '#fff' }
//             ]}>Current</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.progressContainer}>
//           <Text style={styles.progressText}>
//             {selectedButton === 'Current' 
//               ? 'Start 30 taken, 0 skipped' 
//               : `Start ${chartData.reduce((a, b) => a + b, 0)} taken, ${chartData.length - chartData.filter(value => value > 0).length} skipped`}
//           </Text>
//           <BarChart
//             data={{
//               labels: chartData.map((_, index) => `Day ${index + 1}`),
//               datasets: [{
//                 data: chartData
//               }]
//             }}
//             width={screenWidth - 30} // from react-native-chart-kit
//             height={220}
//             yAxisLabel=""
//             chartConfig={{
//               backgroundGradientFrom: "#ffffff",
//               backgroundGradientTo: "#ffffff",
//               decimalPlaces: 0,
//               color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//               labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               style: {
//                 borderRadius: 16
//               },
//               propsForDots: {
//                 r: "6",
//                 strokeWidth: "2",
//                 stroke: "#ffa726"
//               }
//             }}
//             style={{
//               marginVertical: 8,
//               borderRadius: 16
//             }}
//           />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.borderedBoxContainer}>
//             {[1, 2, 3].map((_, index) => (
//               <View key={index} style={styles.borderedBox}>
//                 <View style={styles.datePillsContainer}>
//                   <Text style={styles.dateText}>01 Jan, 2024</Text>
//                   <Text style={styles.pillsText}>4 pills</Text>
//                 </View>
//                 <View style={styles.progressDetails}>
//                   <AntDesign name="checkcircle" size={20} color="green" />
//                   <Text style={styles.detailText}>4 taken</Text>
//                   <AntDesign name="closecircle" size={20} color="red" />
//                   <Text style={styles.detailText}>0 skipped</Text>
//                   <Text style={styles.completeText}>100% complete</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   myProgressContainer: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   myProgressHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     marginTop: 30,
//   },
//   myProgressHeaderText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center",
//   },
//   myProgressBackText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   myProgressToggleButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 15,
//   },
//   myProgressToggleButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: "center",
//     backgroundColor: "#D9D9D9",
//     borderRadius: 10,
//     marginHorizontal: 5,
//     marginBottom: 10,
//   },
//   myProgressToggleButtonText: {
//     fontSize: 16,
//   },
//   progressContainer: {
//     marginBottom: 25,
//   },
//   progressText: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   barChart: {
//     height: 200,
//     backgroundColor: "#E0E0E0",
//   },
//   myProgressContentBox: {
//     backgroundColor: "#fff",
//     padding: 15,
//     marginHorizontal: 15,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   borderedBox: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 10,
//     padding: 10,
//     marginHorizontal: 5,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 2,
//     width: "100%",
//     marginBottom: 10,
//   },
//   datePillsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     marginBottom: 13,
//   },
//   dateText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   pillsText: {
//     fontSize: 16,
//     color: "#20B2AA",
//   },
//   progressDetails: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   detailText: {
//     marginLeft: 5,
//     fontSize: 14,
//   },
//   completeText: {
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "green",
//   },
//   borderedBoxContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//   },
// });

// export default MyProgress;
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const MyProgress = ({ navigation }) => {
  // State to keep track of the selected button and chart data
  const [selectedButton, setSelectedButton] = useState('Past 7 Days');
  const [chartData, setChartData] = useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
      },
    ],
  });

  // Function to handle button press and update chart data
  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);

    // Update chart data based on the selected button
    switch (buttonName) {
      case 'Past 7 Days':
        setChartData({
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: [5, 10, 15, 20],
            },
          ],
        });
        break;
      case 'Last 30 Days':
        setChartData({
          labels: ['1', '5', '10', '15', '20', '25', '30'],
          datasets: [
            {
              data: [60, 90, 120, 150, 200, 180, 210],
            },
          ],
        });
        break;
      case 'Current':
        setChartData({
          labels: ['Today'],
          datasets: [
            {
              data: [40],
            },
          ],
        });
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.myProgressContainer}>
      <View style={styles.myProgressHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <Text style={styles.myProgressBackText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.myProgressHeaderText}>Progress</Text>
      </View>
      <View style={styles.myProgressContentBox}>
        <View style={styles.myProgressToggleButtons}>
          <TouchableOpacity
            style={[
              styles.myProgressToggleButton,
              selectedButton === 'Past 7 Days' && { backgroundColor: '#20B2AA' }
            ]}
            onPress={() => handleButtonPress('Past 7 Days')}
          >
            <Text style={[
              styles.myProgressToggleButtonText,
              selectedButton === 'Past 7 Days' && { color: '#fff' }
            ]}>Past 7 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.myProgressToggleButton,
              selectedButton === 'Last 30 Days' && { backgroundColor: '#20B2AA' }
            ]}
            onPress={() => handleButtonPress('Last 30 Days')}
          >
            <Text style={[
              styles.myProgressToggleButtonText,
              selectedButton === 'Last 30 Days' && { color: '#fff' }
            ]}>Last 30 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.myProgressToggleButton,
              selectedButton === 'Current' && { backgroundColor: '#20B2AA' }
            ]}
            onPress={() => handleButtonPress('Current')}
          >
            <Text style={[
              styles.myProgressToggleButtonText,
              selectedButton === 'Current' && { color: '#fff' }
            ]}>Current</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Start 10 taken, 3 skipped</Text>
          <BarChart
            data={chartData}
            width={Dimensions.get('window').width - 30} 
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.borderedBoxContainer}>
            {[1].map((_, index) => (
              <View key={index} style={styles.borderedBox}>
                <View style={styles.datePillsContainer}>
                  <Text style={styles.dateText}>24 Aug, 2024</Text>
                  <Text style={styles.pillsText}>4 pills</Text>
                </View>
                <View style={styles.datePillsContainer}>
                  <Text style={styles.dateText}>26 Aug, 2024</Text>
                  <Text style={styles.pillsText}>3 pills</Text>
                </View>
                <View style={styles.progressDetails}>
                  <AntDesign name="checkcircle" size={20} color="green" />
                  <Text style={styles.detailText}>7 taken</Text>
                  <AntDesign name="closecircle" size={20} color="red" />
                  <Text style={styles.detailText}>0 skipped</Text>
                  <Text style={styles.completeText}>100% complete</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myProgressContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  myProgressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  myProgressHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  myProgressBackText: {
    fontSize: 16,
    color: "#000",
  },
  myProgressToggleButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  myProgressToggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  myProgressToggleButtonText: {
    fontSize: 16,
  },
  progressContainer: {
    marginBottom: 25,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 15,
  },
  myProgressContentBox: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 15,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  borderedBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    width: "100%",
    marginBottom: 10,
  },
  datePillsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 13,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pillsText: {
    fontSize: 14,
  },
  progressDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  detailText: {
    fontSize: 15,
    marginRight: 20,
  },
  completeText: {
    fontSize: 15,
    color: "green",
  },
});

export default MyProgress;
