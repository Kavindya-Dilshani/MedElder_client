
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import image1 from '../../assets/images/image1.png';

export default function Start({ navigation}) {

    return (
        <LinearGradient
            colors={["#20B2AA", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.6, y: 1.8 }}
            style={styles.gradientBackground}
        >
            <View style={styles.startBox}>
                <Image style={styles.image} resizeMode="cover" source={image1} />
                <View style ={styles.TextBox}>
                    <Text style={styles.headText}> Be In Control Your Meds</Text>
                    <Text style={styles.subText}> Take your medicine at correct time</Text>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('RootTabs')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                    <FontAwesome5 name="long-arrow-alt-right" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
        paddingTop: 170,
    },
    startBox: {
        backgroundColor: "#FFFFFF",
        width: 371,
        height: 490,
        borderRadius: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 25,
        paddingTop: 30, 
        position:'relative'
    },
    image: {
        width: 354,
        height: 337,
         marginBottom: 90,
        position: 'absolute',
        top: -170, 
        left: '50%',
        marginLeft: -160,
    },
    TextBox: {
        position: 'absolute',
        bottom: 120, 
        width: '100%',
        alignItems: 'center',
    },
    startButton: {
        position: 'absolute',
        bottom: 30, 
        left: '50%',
        marginLeft: -156, 
        backgroundColor: "#205278",
        borderRadius: 35,
        padding: 10,
        width: 312,
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 32,
        color: "white",
        fontWeight: "600",
        marginRight: 60,
    },
    headText: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:10,
        lineHeight:50,
        marginLeft:80,
        marginRight:70
    },
    subText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        paddingTop:20
    },
});
