import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types/types";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

const ScreenWrapper = ({
  style,
  children,
  isModal = false,
  showPattern = false,
  bgOpacity = 1,
}: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 40;
  let paddingBottom = 0;

  if (isModal) {
    paddingTop = Platform.OS === "ios" ? height * 0.02 : 45;
    paddingBottom = height * 0.02;
  }

  return (
    <ImageBackground
      style={{
        flex: 1,
        backgroundColor: isModal ? colors.white : colors.neutral900,
      }}
      imageStyle={{
        opacity: showPattern ? bgOpacity : 0,
      }}
      source={require("@/assets/images/bg-pattern.png")}
    >
      <View style={[{ paddingTop, paddingBottom }, style]}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        {children}
      </View>
    </ImageBackground>
  );
};

export default ScreenWrapper;
