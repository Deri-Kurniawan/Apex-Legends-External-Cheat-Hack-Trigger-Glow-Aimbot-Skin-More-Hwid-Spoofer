import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Navbar = ({ navigation }) => {
  return (
    <View className="absolute bottom-0 left-0 w-full bg-white border-t-[0.5px] border-gray-200 pb-5 z-50">
      <View className="flex flex-row items-center justify-center">
        <TouchableOpacity
          className="flex items-center justify-center flex-grow h-12"
          onPress={() => navigation.navigate("Timeline")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5948/5948524.png",
            }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center justify-center flex-grow h-12"
          onPress={() => navigation.navigate("Explore")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5948/5948534.png",
            }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center justify-center flex-grow h-12"
          onPress={() => navigation.navigate("Reels")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5948/5948543.png",
            }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center justify-center flex-grow h-12"
          onPress={() => navigation.navigate("MarketPlace")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5948/5948550.png",
            }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center justify-center flex-grow h-12"
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri: "http://unsplash.it/400?random",
            }}
            className="w-6 h-6 rounded-full"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
