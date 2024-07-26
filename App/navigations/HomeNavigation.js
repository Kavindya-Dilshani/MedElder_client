
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Start from '../pages/start/Start';
import RootTabs from './Tabs';
import SignUp from '../pages/signUp/SignUp';
import { AuthContext } from '../utilities/auth/AuthContext';
import SecondaryMedicineDetails from '../pages/finalAddMedicine/SecondaryMedicineDetails';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
    const { userInfo } = useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userInfo.access_token ? (
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Home" component={Home} />

                </>
            ) : (
                <>
                    <Stack.Screen name="Start" component={Start} />
                    <Stack.Screen name="RootTabs" component={RootTabs} />
                </>
            )}
        </Stack.Navigator>
    );
}




