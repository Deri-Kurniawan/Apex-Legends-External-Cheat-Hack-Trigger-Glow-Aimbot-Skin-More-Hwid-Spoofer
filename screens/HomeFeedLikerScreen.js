import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableHighlight,
  FlatList,
} from "react-native";
import React, { useCallback } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Navbar from "../components/Navbar";
import FocusedStatusBar from "../components/FocusedStatusbar";

const HomeFeedLikerScreen = ({ navigation }) => {
  // search by username sensitive case & real name lowercase
  const [search, setSearch] = React.useState("");
  const [likers, setLikers] = React.useState([
    {
      id: 1,
      username: "jessica_",
      name: "Jessica Alexander",
      avatar:
        "https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      followed: true,
    },
    {
      id: 2,
      username: "ayogunseinde",
      name: "Ayo Ogunseinde",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      followed: false,
    },
  ]);

  const headerFeedLikers = useCallback(
    () => (
      <View className="flex flex-row items-center rounded-lg bg-gray-100 mx-4">
        <View className="ml-3">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5948/5948534.png",
            }}
            className="w-4 h-4"
          />
        </View>
        <TextInput
          className="flex flex-grow p-1 mx-2 text-bold text-lg"
          placeholder="Cari"
          onChangeText={(txt) => setSearch(txt)}
        />
      </View>
    ),
    []
  );

  const renderFeedLikers = useCallback(
    ({ item }) => (
      <TouchableHighlight
        underlayColor="#F3F4F6"
        onPress={(e) => {
          e.stopPropagation();
          navigation.navigate("Profile");
        }}
      >
        <View className="flex flex-row items-center justify-between py-2 px-4">
          <View className="flex flex-row items-center">
            <Pressable
              onPress={(e) => {
                e.stopPropagation();
                console.log("View stories if exists");
              }}
            >
              <Image
                className="w-14 h-14 rounded-full"
                source={{
                  uri: item.avatar,
                }}
              />
            </Pressable>
            <View className="pl-4">
              <Text>{item.username}</Text>
              <Text className="text-gray-500">{item.name}</Text>
            </View>
          </View>
          <TouchableOpacity
            className={`${
              item.followed ? "bg-blue-500 px-7" : "bg-gray-100 px-11"
            } py-2 rounded-lg`}
            activeOpacity={0.8}
            onPress={() => console.log("Follow or Unfollow someone")}
          >
            <Text className={item.followed && "text-white"}>
              {item.followed ? "Mengikuti" : "Ikuti"}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    ),
    []
  );

  const keyExtractorById = useCallback((item) => item.id, []);

  return (
    <>
      <FocusedStatusBar backgroundColor="transparent" />
      <Navbar navigation={navigation} />
      <SafeAreaView className="bg-white">
        <View className="px-4">
          <View className="flex flex-row items-center py-2">
            <TouchableOpacity
              activeOpacity={0.5}
              className="pr-2"
              onPress={() => navigation.goBack()}
            >
              <AntDesign size={27} name="arrowleft" />
            </TouchableOpacity>
            <Text className="font-bold text-xl ml-4 p-2">Suka</Text>
          </View>
        </View>
        <FlatList
          data={likers}
          keyExtractor={keyExtractorById}
          renderItem={renderFeedLikers}
          ListHeaderComponent={headerFeedLikers}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeFeedLikerScreen;
