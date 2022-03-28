import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { IconButton, TextButton } from "../../components";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h2 }}>Hello Shade!.</Text>
          <Text
            style={{
              color: COLORS.gray50,
              ...FONTS.body3,
            }}
          >
            Monday, 28th March 2022
          </Text>
        </View>
        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{ tintColor: COLORS.black }}
        />
      </View>
    );
  }
  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: "flex-start",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{ borderRadius: SIZES.radius }}
      >
        {/* Info */}
        <Text style={{ color: COLORS.white, ...FONTS.body2 }}>HOW TO</Text>
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          Make your brand more visible with our checklist
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            color: COLORS.white,
            ...FONTS.body4,
          }}
        >
          By Scott Harris
        </Text>
        {/* Image */}
        <Image
          source={images.start_learning}
          style={{
            width: "100%",
            height: 110,
            marginTop: SIZES.padding,
          }}
        />
        {/* Button */}
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{ color: COLORS.black }}
        />
      </ImageBackground>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Learning */}
        {renderStartLearning()}
      </ScrollView>
    </View>
  );
};

export default Home;
