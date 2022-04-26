import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable"
// import { LinearGradient } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, FONTS, icons, Styles } from "../../constants";
// onPress={() => navigation.navigate("LoginScreen")}
function SplashScreen({ navigation, onPress }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="2000"
          source={require("../../assets/images/iMind.png")}
          style={Styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={Styles.footer}
      animation="fadeInUpBig">
        <Text style={Styles.title}>Welcome to iMind</Text>
        <Text style={Styles.text}>Sign in with account</Text>
        <View style={Styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={Styles.signIn}
            >
              <Text style={Styles.textSign}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default SplashScreen;
