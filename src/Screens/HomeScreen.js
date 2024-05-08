import React from "react";
import { Image, Text, View } from "react-native";
import LottieView from "lottie-react-native";
function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        source={require("../../assets/animation/celebration.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

export default HomeScreen;
