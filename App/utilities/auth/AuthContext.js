import { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (name, email, password) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://192.168.8.105:5001/api/auth/signup",
        { name, email, password }
      );
      let userInfo = res.data.user;
      setUserInfo(userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setIsLoading(false);
      return userInfo;
    } catch (e) {
      console.log(`Signup error: ${e}`);
      setIsLoading(false);
      throw e;
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://192.168.8.105:5001/api/auth/login", {
        email,
        password,
      });
      let userInfo = res.data.user;
      setUserInfo(userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log("UserInfo saved:", userInfo);
      setIsLoading(false);
      return userInfo;
    } catch (e) {
      console.log(`Login error: ${e}`);
      setIsLoading(false);
      throw e;
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("userInfo"); 
      setUserInfo({}); 
      setIsLoading(false);
      console.log("User logged out");
    } catch (e) {
      console.log(`Logout error: ${e}`);
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, userInfo, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


