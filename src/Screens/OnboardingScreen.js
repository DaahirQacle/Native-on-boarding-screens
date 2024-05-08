import React from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
function OnboardingScreen({ navigation }) {
  const handleDone = () => {
    navigation.navigate("Home");
  };
  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={{ paddingHorizontal: 20 }}
      pages={[
        {
          backgroundColor: "#a3e635",
          image: (
            <LottieView
              source={require("../../assets/animation/Animation - 1715157777709.json")}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Welcome to our App",
          subtitle: "Explore amazing features and functionalities",
        },
        {
          backgroundColor: "#67e8f9",
          image: (
            <LottieView
              source={require("../../assets/animation/Animation - 1715160114069.json")}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Get Started Quickly",
          subtitle: "Easy setup and configuration process",
        },
        {
          backgroundColor: "#c084fc",
          image: (
            <LottieView
              source={require("../../assets/animation/last.json")}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Enjoy Your Experience",
          subtitle: "Make the most out of our app's features",
        },
      ]}
    />
  );
}

export default OnboardingScreen;
