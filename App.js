import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/navigations/HomeNavigation';
import { AuthProvider } from './App/utilities/auth/AuthContext';



export default function App() {
  return (
  
      <NavigationContainer>
          <AuthProvider>
        <HomeNavigation />
        </AuthProvider>
      </NavigationContainer>

  );
}
