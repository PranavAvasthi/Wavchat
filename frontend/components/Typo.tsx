import { colors } from "@/constants/theme";
import { TypoProps } from "@/types/types";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { Text, TextStyle } from "react-native";

const Typo = ({
  size = 16,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: verticalScale(size),
    color,
    fontWeight,
  };

  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;
