
import React, { useState , useContext} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import { Fontisto } from "@expo/vector-icons";
import axios from 'axios';
import { AuthContext } from "../../utilities/auth/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

export default function SignUp({ navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {isLoading, signup} = useContext(AuthContext);

  const handleSubmit =  () => {
    if (!name || !emailVerify || !passwordVerify) {
      Alert.alert("Please fill all the fields");
      return;
    }

    signup(name,email, password)
    .then(() => {
      Alert.alert("Registered Successfully!!");
      navigation.navigate('Start');
    })
    .catch(e => {
      console.log(e);
      Alert.alert("User Already exist!");
    });
};

  const handleEmail = (emailVar) => {
    setEmail(emailVar);
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailVar);
    setEmailVerify(isValid);
  };

  const handlePassword = (passwordVar) => {
    setPassword(passwordVar);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(passwordVar);
    setPasswordVerify(isValidPassword);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
      <View style={styles.headingContainer}>
        <View style={styles.headTexts}>
          <Text style={styles.WelcomeText}>Welcome</Text>
          <Text style={styles.signUpText}>Sign Up to the Med Elder</Text>
          <View style={styles.signUpContainer}>
            <Spinner visible = {isLoading} />
            <View style={styles.formArea}>
              <Text style={styles.signUpLabel}>Name</Text>
              <TextInput 
                style={styles.textInput} 
                onChangeText={(name) => setName(name)}
                value={name}
              />
            </View>
            <View style={styles.formArea}>
              <Text style={styles.signUpLabel}>Email</Text>
              <View style={styles.signUpInputContainer}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleEmail}
                  value={email}
                  autoCapitalize="none"
                />
                {email.length > 0 && (
                  emailVerify ? (
                    <Feather name='check-circle' color="green" size={18} style={styles.SignUpIcon} />
                  ) : (
                    <Error name="error" color="red" size={18} style={styles.SignUpIcon} />
                  )
                )}
              </View>
              {email.length > 0 && !emailVerify && (
                <Text style={styles.errorText}>
                  Enter a valid email address
                </Text>
              )}
            </View>
            <View style={styles.formArea}>
              <Text style={styles.signUpLabel}>Password</Text>
              <View style={styles.signUpInputContainer}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={!showPassword}
                  onChangeText={handlePassword}
                  value={password}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {password.length > 0 && (
                    showPassword ? (
                      <Feather name='eye-off' color="black" size={18} style={styles.SignUpIcon} />
                    ) : (
                      <Feather name='eye' color="black" size={18} style={styles.SignUpIcon} />
                    )
                  )}
                </TouchableOpacity>
              </View>
              {password.length > 0 && !passwordVerify && (
                <Text style={styles.errorText}>
                  Invalid password format
                </Text>
              )}
            </View>
          </View>
          <View style={styles.signUpButton}>
            <TouchableOpacity style={styles.sBut} onPress={handleSubmit}>
              <View>
                <Text style={styles.textSign}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.extraView}>
            <Text style={{ fontSize: 16 }}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{ fontSize: 16, color: "#20B2AA", marginLeft: 7 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20B2AA",
  },
  headTexts: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    alignItems: "center",
    width: 371,
    height: 570,
    marginTop: 75,
  },
  WelcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#20B2AA",
    textAlign: "center",
    marginBottom: 5,
  },
  signUpText: {
    fontSize: 26,
    color: "#000000",
  },
  signUpContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 25,
  },
  formArea: {
    marginBottom: 20,
  },
  signUpLabel: {
    fontSize: 23,
    color: "#000000",
    marginBottom: 8,
  },
  signUpInputContainer: {
    position: 'relative',
  },
  textInput: {
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
  SignUpIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  errorText: {
    marginLeft: 10,
    marginTop: 5,
    color: 'red',
  },
  signUpButton: {
    marginTop: 18,
    alignItems: "center",
  },
  sBut: {
    width: 220,
    height: 50,
    backgroundColor: "#205278",
    paddingVertical: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSign: {
    fontSize: 30,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  extraView: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
});


