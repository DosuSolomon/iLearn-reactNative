import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants";

const Counseling = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          ...FONTS.h1,
        }}
      >
        Counseling
      </Text>
      {/* <IconButton icon={icons.sun} iconStyle={{ tintColor: COLORS.black }} /> */}
    </View>
  );
};

export default Counseling;
