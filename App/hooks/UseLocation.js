// App/hooks/useLocation.js
import { useEffect, useContext, useState } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "../context/UserLocationContext";

export default function useLocation() {
  const { setLocation } = useContext(UserLocationContext);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (setLocation) {
        setLocation(location);
      }
    })();
  }, [setLocation]);

  return { errorMsg };
}
