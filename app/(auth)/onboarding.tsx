import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Typo size={43} color={colors.white} fontWeight={900}>
            Wavchat
          </Typo>
        </View>

        <Animated.Image
          source={require("@/assets/images/onboarding.png")}
          style={styles.onboardingImage}
          entering={FadeIn.duration(700).springify()}
          resizeMode="contain"
        />

        <View>
          <Typo size={33} color={colors.white} fontWeight={800}>
            Stay Connected
          </Typo>

          <Typo size={33} color={colors.white} fontWeight={800}>
            with your friends
          </Typo>

          <Typo size={33} color={colors.white} fontWeight={800}>
            and family
          </Typo>
        </View>

        <Button
          style={{ backgroundColor: colors.white }}
          onPress={() => router.push("/(auth)/register")}
        >
          <Typo size={23} fontWeight="bold">
            Get Started
          </Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10,
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
  onboardingImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: "center",
  },
});
