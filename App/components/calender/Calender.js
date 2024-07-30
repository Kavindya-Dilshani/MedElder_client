// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const getNextDates = () => {
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const dates = [];
//     const today = new Date();

//     for (let i = 0; i < 4; i++) {
//         const nextDate = new Date(today);
//         nextDate.setDate(today.getDate() + i);
//         const dateText = nextDate.getDate();
//         const dayName = daysOfWeek[nextDate.getDay()];
//         dates.push({ dateText, dayName, isToday: i === 0 });
//     }
    
//     return dates;
// };

// export default function Calendar({ showDates = true,handleDateSelect }) {
//     const dates = getNextDates();
    

//     return (
//         <View style={styles.calendarRow}>
//             {dates.map((date, index) => (
//                 <View key={index} style={[styles.calendarBox, date.isToday && styles.todayBox, !showDates && styles.noDatesBox]}
//                 onPress={() => handleDateSelect(date)}>
//                     {showDates && <Text style={styles.dateText}>{date.dateText}</Text>}
//                     <Text style={[styles.dayName, !showDates && date.isToday && styles.noDatesDayName]}>{date.dayName}</Text>
//                 </View>
//             ))}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     calendarRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     calendarBox: {
//         backgroundColor: "#D9D9D9",
//         width: 79,
//         height: 110,
//         borderRadius: 60,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     todayBox: {
//         backgroundColor: "#20B2AA",
//     },
//     noDatesBox: {
//         width: 70,
//         height: 70,
//         borderRadius: 60,
//     },
//     dateText: {
//         fontSize: 26,
//         marginBottom: 5
//     },
//     dayName: {
//         fontSize: 22
//     },
//     noDatesDayName: {
//         fontSize: 20, 
//     }
// });


// Calendar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const getNextDates = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 4; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const dateText = nextDate.getDate();
        const dayName = daysOfWeek[nextDate.getDay()];
        dates.push({ dateText, dayName, isToday: i === 0, date: nextDate });
    }

    return dates;
};

export default function Calendar({ showDates = true, handleDateSelect }) {
    const dates = getNextDates();

    return (
        <View style={styles.calendarRow}>
            {dates.map((date, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.calendarBox, date.isToday && styles.todayBox, !showDates && styles.noDatesBox]}
                    onPress={() => handleDateSelect(date.date)}
                >
                    {showDates && <Text style={styles.dateText}>{date.dateText}</Text>}
                    <Text style={[styles.dayName, !showDates && date.isToday && styles.noDatesDayName]}>{date.dayName}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    calendarRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    calendarBox: {
        backgroundColor: "#D9D9D9",
        width: 79,
        height: 110,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    todayBox: {
        backgroundColor: "#20B2AA",
    },
    noDatesBox: {
        width: 70,
        height: 70,
        borderRadius: 60,
    },
    dateText: {
        fontSize: 26,
        marginBottom: 5
    },
    dayName: {
        fontSize: 22
    },
    noDatesDayName: {
        fontSize: 20, 
    }
});
