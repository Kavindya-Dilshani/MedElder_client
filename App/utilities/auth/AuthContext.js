
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an authentication context
export const AuthContext = createContext();

// Create an authentication provider component
export const AuthProvider = ({ children }) => {
  // Initialize user info and loading state
  const [userInfo, setUserInfo] = useState(null);  // Better default value
  const [isLoading, setIsLoading] = useState(false);

  // Signup function
  const signup = async (name, email, password) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://192.168.8.104:5001/api/auth/signup", {
        name, email, password
      });

      // Get user info and token from the response
      let userInfo = res.data.user;
      let token = res.data.token;

      // Store user info and token in state
      setUserInfo({ ...userInfo, token });

      // Save user info and token to AsyncStorage
      await AsyncStorage.setItem("userInfo", JSON.stringify({ ...userInfo, token }));

      setIsLoading(false);
      return userInfo;
    } catch (e) {
      console.log(`Signup error: ${e}`);
      setIsLoading(false);
      throw e;
    }
  };

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://192.168.8.104:5001/api/auth/login", {
        email, password
      });

      // Get user info and token from the response
      let userInfo = res.data.user;
      let token = res.data.token;

      // Store user info and token in state
      setUserInfo({ ...userInfo, token });

      // Save user info and token to AsyncStorage
      await AsyncStorage.setItem("userInfo", JSON.stringify({ ...userInfo, token }));

      setIsLoading(false);
      return userInfo;
    } catch (e) {
      console.log(`Login error: ${e}`);
      setIsLoading(false);
      throw e;
    }
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    try {
      // Clear AsyncStorage
      await AsyncStorage.removeItem("userInfo");

      // Reset the user info state to null
      setUserInfo(null);
      
      setIsLoading(false);
      console.log("User logged out");
    } catch (e) {
      console.log(`Logout error: ${e}`);
      setIsLoading(false);
    }
  };

  // Check if the user is logged in
  const isLoggedIn = async () => {
    try {
      // Retrieve stored user info from AsyncStorage
      let storedUserInfo = await AsyncStorage.getItem("userInfo");

      // If user info is found, parse and set it
      if (storedUserInfo) {
        setUserInfo(JSON.parse(storedUserInfo));
      }
    } catch (e) {
      console.log(`isLoggedIn error: ${e}`);
    }
  };

  // Use effect to check if user is already logged in on app start
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, userInfo, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
