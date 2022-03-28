import React from "react";
import { View, Text, ImageBackround, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";

const Home = () => {
    function renderHeader(){
        <View style={{ 
            flexDirection: row,
            marginTop: 40,
            marginBottom: 10,
            paddingHorizontal: SIZES.padding,
            alignItems: 'center'
        }}>
            {/* Greetings */}
            <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.h2 }}> Hello Shade!</Text>
                <Text style={{ color: COLORS.gray50, ...FONTS.body3}}>
                    Monday, 28th March 2022 
                </Text>
            </View>
        </View>
    }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        {/* Header */}
        { renderHeader()}
        {/* Content */}
    </View>
  );
};

export default Home;
