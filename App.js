import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./App/navigations/HomeNavigation";
import { AuthProvider } from "./App/utilities/auth/AuthContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";
import { UserLocationContext } from "./App/context/UserLocationContext.js";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    poppins: require("./App/assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./App/assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./App/assets/fonts/Poppins-Bold.ttf"),
  });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <NavigationContainer>
        <AuthProvider>
          <HomeNavigation  />
        </AuthProvider>
      </NavigationContainer>
    </UserLocationContext.Provider>
  );
}
