import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, LoginStyles } from "../../constants";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

function LoginScreen({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };
  const updateSecurityTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={LoginStyles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={LoginStyles.header}>
        <Text style={LoginStyles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={LoginStyles.footer}>
        
          <Text style={LoginStyles.text_footer}>Email</Text>
          <View style={LoginStyles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={LoginStyles.textInput}
              autoCapitalize="none"
              onChangeText={(value) => textInputChange(value)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
      
        
          <Text style={[LoginStyles.text_footer, {marginTop: 30}]}>Password</Text>
          <View style={LoginStyles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={LoginStyles.textInput}
              autoCapitalize="none"
              onChangeText={(value) => handlePasswordChange(value)}
            />
            <TouchableOpacity onPress={updateSecurityTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="green" size={20} />
              ) : (
                <Feather name="eye" color="green" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("MainLayout")}>
            <View style={LoginStyles.button}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={LoginStyles.signIn}
              >
                <Text
                  style={[
                    LoginStyles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign In
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignupScreen")}
            style={[
              LoginStyles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                LoginStyles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
       
      </Animatable.View>
    </View>
  );
}

export default LoginScreen;
