import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Medicine from "../pages/medicine/Medicine";
import Emergency from "../pages/emergency/Emergency";
import AddMedicine from '../components/allMedicine/AddMedicine';
import Location from "../pages/location/Location";
import Setting from "../pages/setting/Setting";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomeIcon from '../assets/icons/Home.png';
import LocationIcon from '../assets/icons/Location.png';
import EmergencyIcon from '../assets/icons/Emergency.png';
import PlusIcon from '../assets/icons/Plus.png';
import SettingIcon from '../assets/icons/Setting.png';

const Tabs = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -24,
            justifyContent: "center",
            alignItems: "center",
            ...styles.shadow,
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#000000'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

export default function RootTabs() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 25,
                    height: 70,
                    ...styles.shadow
                }
            }}
        >
            <Tabs.Screen name="Medicine" component={Medicine} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
                        <Image source={HomeIcon}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 23,
                                bottom:6,
                                tintColor: focused ? '#205278' : "#000000"
                            }}
                        />
                        <Text style={{ color: focused ? '#205278' : "#000000", fontSize: 14, fontWeight:600,   bottom:6 }}>Home</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name="Emergency" component={Emergency} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
                        <Image source={EmergencyIcon}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 23,
                                bottom:6,
                                tintColor: focused ? '#205278' : "#000000"
                            }}
                        />
                        <Text style={{  color: focused ? '#205278' : "#000000", fontSize: 14, fontWeight:600, bottom:6, }}>Emergency</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name="AddMedicine" component={AddMedicine} options={{
                tabBarStyle: { display: 'none' },
                tabBarIcon: ({ focused }) => (
                    <Image source={PlusIcon}
                        resizeMode="contain"
                        style={{
                            width: 28,
                            height: 30,
                            tintColor: "#FFFFFF"
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />
            <Tabs.Screen name="Location" component={Location} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
                        <Image source={LocationIcon}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 23,
                                bottom:6,
                                tintColor: focused ? '#205278' : "#000000"
                            }}
                        />
                        <Text style={{ color: focused ? '#205278' : "#000000", fontSize: 14, fontWeight:600, bottom:6 }}>Services</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name="Setting" component={Setting} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
                        <Image source={SettingIcon}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 23,
                                bottom:6,
                                tintColor: focused ? '#205278' : "#000000"
                            }}
                        />
                        <Text style={{ color: focused ? '#205278' : "#000000", fontSize: 14, fontWeight:600, bottom:6 }}>Profile</Text>
                    </View>
                )
            }} />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

