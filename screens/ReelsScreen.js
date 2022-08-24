import { SafeAreaView, Text } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import FocusedStatusBar from "../components/FocusedStatusbar";

const ReelsScreen = ({ navigation }) => {
  return (
    <>
      <FocusedStatusBar backgroundColor="transparent" />
      <Navbar navigation={navigation} />
      <SafeAreaView>
        <Text>Reels Screen</Text>
      </SafeAreaView>
    </>
  );
};

export default ReelsScreen;
