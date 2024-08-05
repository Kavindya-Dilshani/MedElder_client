import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import EmergencyContactConfig from '../../config/EmergecnyContactConfig.js'; 
import image8 from "../../assets/images/image8.png"; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

const CallHelp = () => {
  return (
    <View style={styles.CallHelpContainer}>
      <View style={styles.CallHelpTopContainer}>
        <Text style={styles.callHelpText}>Call for Help</Text>
        <Image
          style={styles.CallHelpImage}
          resizeMode="contain"
          source={image8}
        />
      </View>

      <View style={styles.contactContainer}>
        {EmergencyContactConfig.emergencyContacts.map((contact, index) => (
          <View key={index} style={styles.contactBox}>
            <View style={styles.contactDetails}>
              <Text style={styles.contactTitle}>{contact.title}</Text>
              <Text style={styles.contactNumber}>{contact.number}</Text>
            </View>
            <Icon name="phone" size={24} color="black" style={styles.contactIcon} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CallHelp;

const styles = StyleSheet.create({
  CallHelpContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  CallHelpTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  callHelpText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  CallHelpImage: {
    width: 40,
    height: 40,
  },
  contactContainer: {
    marginTop: 40,
  },
  contactBox: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    width:361,
    height:62,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal:10
  },
  contactDetails: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  contactNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactTitle: {
    fontSize: 16,
  },
  contactIcon: {
    marginLeft: 10,
  },
});
