import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet } from "react-native";

const RegisterScreen = () => {
  return (
    <ScreenWrapper>
      <Typo color={colors.white}>Register</Typo>
    </ScreenWrapper>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
