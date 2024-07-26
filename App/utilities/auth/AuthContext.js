

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const signup = (name, email, password) => {
    setIsLoading(true);
    return axios.post('http://192.168.8.104:5001/api/auth/signup', { name, email, password })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        return userInfo;  
      })
      .catch(e => {
        console.log(`signup error ${e}`);
        setIsLoading(false);
        throw e;  
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    return axios.post('http://192.168.8.104:5001/api/auth/login', { email, password })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        return userInfo;  
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
        throw e;  
      });
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
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
    <AuthContext.Provider value={{ isLoading, userInfo, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};




