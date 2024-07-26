
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import { Fontisto } from "@expo/vector-icons";
import { AuthContext } from "../../utilities/auth/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!emailVerify || !passwordVerify) {
      Alert.alert("Please fill all the fields");
      return;
    }
    login(email, password)
    .then(() => {
      Alert.alert("Login Successfully!!");
      navigation.navigate("Start");
    })
    .catch(e => {
      console.log(e);
      Alert.alert("An error occurred. Please check your connection & try again!");
    });
  };


  function handleEmail(emailVar) {
    setEmail(emailVar);
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailVar);
    setEmailVerify(isValid);
  }

  function handlePassword(passwordVar) {
    setPassword(passwordVar);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(passwordVar);
    setPasswordVerify(isValidPassword);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={"always"}>
      <View style={styles.loginHeadingContainer}>
        <View style={styles.loginHeadTexts}>
          <Text style={styles.loginWelcomeText}>Welcome Back</Text>
          <Text style={styles.loginText}>Log in to the Med Elder</Text>
          <View style={styles.loginContainer}>
            <Spinner visible={isLoading} />
            <View style={styles.loginFormArea}>
              <Text style={styles.loginLabel}>Email</Text>
              <View style={styles.loginInputContainer}>
                <TextInput
                  style={styles.loginTextInput}
                  onChangeText={handleEmail}
                  value={email}
                />
                {email.length < 1 ? null : emailVerify ? (
                  <Feather name='check-circle' color="green" size={18} style={styles.loginIcon} />
                ) : (
                  <Error name="error" color="red" size={18} style={styles.loginIcon} />
                )}
              </View>
              {email.length < 1 ? null : emailVerify ? null : (
                <Text style={styles.errorText}>
                  Enter a valid email address
                </Text>
              )}
            </View>
            <View style={styles.loginFormArea}>
              <Text style={styles.loginLabel}>Password</Text>
              <View style={styles.loginInputContainer}>
                <TextInput
                  style={styles.loginTextInput}
                  secureTextEntry={!showPassword}
                  onChangeText={handlePassword}
                  value={password}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {password.length < 1 ? null : !showPassword ? (
                    <Feather name='eye' color="black" size={18} style={styles.loginIcon} />
                  ) : (
                    <Feather name='eye-off' color="black" size={18} style={styles.loginIcon} />
                  )}
                </TouchableOpacity>
              </View>
              {password.length < 1 ? null : passwordVerify ? null : (
                <Text style={styles.errorText}>
                  Invalid password format
                </Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={{ color: "#20B2AA", fontSize: 16, marginBottom: 3 }}>
                Forget password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginButton}>
            <TouchableOpacity style={styles.lBut} onPress={handleLogin}>
              <View>
                <Text style={styles.textLogin}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "gray",
              width: "100%",
              marginVertical: 15,
            }}
          />
          <TouchableOpacity
            style={styles.googleButtonContainer}
          >
            <Fontisto name="google" color="white" size={20} marginLeft={5} padding={3} />
            <Text style={styles.googleButtonText}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
          <View style={styles.loginExtraView}>
            <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text
                style={{ fontSize: 16, color: "#20B2AA", marginLeft: 7 }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginHeadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20B2AA",
  },
  loginHeadTexts: {
    borderColor: "#fff",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    width: 371,
    height: 570,
    borderRadius: 50,
    marginTop: 75,
  },
  loginWelcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#20B2AA",
    textAlign: "center",
    marginBottom: 5,
  },
  loginText: {
    fontSize: 26,
    color: "#000000",
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 25,
  },
  loginFormArea: {
    marginBottom: 20,
  },
  loginLabel: {
    fontSize: 23,
    color: "#000000",
    marginBottom: 8,
  },
  loginInputContainer: {
    position: 'relative',
  },
  loginTextInput: {
    height: 42,
    borderColor: "#a8efeb",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#a8efeb",
    fontSize: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  errorText: {
    marginLeft: 10,
    marginTop: 5,
    color: 'red',
  },
  loginButton: {
    marginTop: 18,
    alignItems: "center",
  },
  lBut: {
    width: 220,
    height: 50,
    backgroundColor: "#205278",
    paddingVertical: 5,
    borderRadius: 30,
  },
  textLogin: {
    fontSize: 30,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  loginExtraView: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  googleButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8db600",
    borderRadius: 30,
    padding: 5,
    marginTop: 3,
    width: 300,
    height: 50,
  },
  googleButtonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "500",
    marginLeft: 15,
  },
});

