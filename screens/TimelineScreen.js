import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";
import FocusedStatusBar from "../components/FocusedStatusbar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Navbar from "../components/Navbar";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const TimelineScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const [usersStories, setUsersStories] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "ranin210__",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "tarankaa",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "anonymous__",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "tarankaa",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "tarankaa",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "tarankaa",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "tarankaa",
    },
  ]);

  const [usersFeed, setUsersFeed] = useState([
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "deri561",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      location: "New York, USA",
      caption:
        "This is a caption lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem. caption lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem.",
      likes: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
        },
      ],
      comments: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
        {
          id: 2,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
        {
          id: 3,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
      ],
    },
    {
      id: 2,
      avatar:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "ranin210__",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      caption: "This is a caption",
      likes: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
        },
      ],
      comments: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
        {
          id: 2,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
      ],
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "ranin210__",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      caption: "This is a caption",
      likes: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
        },
      ],
      comments: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
      ],
    },
    {
      id: 4,
      avatar:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "ranin210__",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      caption: "This is a caption",
      likes: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
        },
      ],
      comments: [
        {
          id: 1,
          username: "anonymous__",
          avatar: "https://i.pravatar.cc/300",
          comment: "This is a comment",
        },
      ],
    },
  ]);

  const countUserFeedById = (id, countBy) => {
    return usersFeed.find((feed) => feed.id === id)[countBy].length || 0;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setUsersFeed([
        {
          id: 1,
          avatar: "http://unsplash.it/800?random",
          username: "asique_people",
          image: "http://unsplash.it/800?random",
          location: "Legok Hangseur",
          caption:
            "This is a caption lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem. caption lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem.",
          likes: [
            {
              id: 1,
              username: "anonymous__",
              avatar: "https://i.pravatar.cc/300",
            },
          ],
          comments: [
            {
              id: 1,
              username: "anonymous__",
              avatar: "https://i.pravatar.cc/300",
              comment: "This is a comment",
            },
            {
              id: 2,
              username: "anonymous__",
              avatar: "https://i.pravatar.cc/300",
              comment: "This is a comment",
            },
            {
              id: 3,
              username: "anonymous__",
              avatar: "https://i.pravatar.cc/300",
              comment: "This is a comment",
            },
          ],
        },
      ]);
      setRefreshing(false);
    });
  }, []);

  const renderItemUsersStories = useCallback(
    ({ item }) => (
      <View className="relative px-3 py-3">
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={{ uri: item.image }}
            className="w-16 h-16 mb-2 rounded-full"
          />
          {item.id === 1 && (
            <View className="absolute bottom-2 right-0 bg-white rounded-full border-[1px] border-white">
              <AntDesign name="pluscircle" size={18} color="#02adf0" />
            </View>
          )}
        </TouchableOpacity>
        <Text className="text-xs text-center">
          {item.id === 1 ? "Cerita Anda" : item.username}
        </Text>
      </View>
    ),
    []
  );

  const renderItemUsersFeed = useCallback(
    ({ item }) => (
      <>
        <View className="flex flex-row">
          <TouchableOpacity
            activeOpacity={0.5}
            className="flex flex-row items-center flex-grow"
            onPress={(e) => {
              e.stopPropagation();
              navigation.navigate("Profile");
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={(e) => {
                e.stopPropagation();
                console.log("Story if exist");
              }}
            >
              <Image
                source={{ uri: item.avatar }}
                className="ml-2 rounded-full w-7 h-7"
              />
            </TouchableOpacity>
            <View className="flex flex-col">
              <Text className="pl-2 font-extrabold ">{item.username}</Text>
              {item.location && (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log("Location if exist");
                  }}
                >
                  <Text className="pl-2 text-xs">{item.location}</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
          <View className="p-4">
            <Feather size={18} name="more-vertical" />
          </View>
        </View>
        <Image
          className="w-full bg-contain h-72"
          source={{ uri: item.image }}
        />
        <View className="flex flex-row justify-between px-2">
          <View className="flex flex-row">
            <TouchableOpacity
              className="p-2"
              activeOpacity={0.5}
              onPress={() => console.log("Like clicked")}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5948/5948503.png",
                }}
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2"
              activeOpacity={0.5}
              onPress={() => console.log("Comment clicked")}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5948/5948565.png",
                }}
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2"
              activeOpacity={0.5}
              onPress={() => console.log("Share clicked")}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5948/5948572.png",
                }}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="p-2"
            activeOpacity={0.5}
            onPress={() => console.log("Bookmark clicked")}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/5948/5948594.png",
              }}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
        <View className="px-3">
          <TouchableOpacity
            className="flex flex-row items-center py-1"
            activeOpacity={0.5}
            onPress={() => navigation.navigate("HomeFeedLiker")}
          >
            <Image
              className="w-5 h-5 rounded-full"
              source={{ uri: item.image }}
            />
            <Text className="font-bold">
              {" "}
              {countUserFeedById(item.id, "likes")} suka
            </Text>
          </TouchableOpacity>
          <Text className="py-1">
            <Text
              className="font-bold"
              onPress={() => navigation.navigate("Profile")}
            >
              {item.username}
            </Text>{" "}
            <Text>{item.caption}</Text>
          </Text>
          {countUserFeedById(item.id, "comments") > 0 && (
            <Pressable onPress={() => console.log("Lihat komentar")}>
              <Text className="font-bold text-gray-700 opacity-60">
                Lihat semua {countUserFeedById(item.id, "comments")} komentar
              </Text>
            </Pressable>
          )}
        </View>
      </>
    ),
    []
  );

  const keyExtractorById = useCallback((item) => item.id, []);

  return (
    <>
      <FocusedStatusBar backgroundColor="transparent" />
      <Navbar navigation={navigation} />
      <SafeAreaView>
        <View className="flex flex-row items-center justify-between pl-4">
          <Text className="text-4xl" style={{ fontFamily: "Billabong" }}>
            Instagram
          </Text>
          <View className="flex flex-row items-center justify-center pr-2">
            <TouchableOpacity className="p-3 py-4">
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/5948/5948495.png",
                }}
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-3 py-4">
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5948/5948503.png",
                }}
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-3 py-4">
              <Image
                className="w-6 h-6"
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/5948/5948514.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/* Users Stories */}
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            initialNumToRender={5}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            bounces={true}
            maxToRenderPerBatch={7}
            data={usersFeed}
            keyExtractor={keyExtractorById}
            renderItem={renderItemUsersFeed}
            ListHeaderComponent={() => (
              <>
                {/* Feed Content */}
                <FlatList
                  className="border-b-[0.5px] border-gray-200"
                  initialNumToRender={5}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  bounces={true}
                  maxToRenderPerBatch={7}
                  data={usersStories}
                  keyExtractor={keyExtractorById}
                  renderItem={renderItemUsersStories}
                />
              </>
            )}
            ListFooterComponent={() => <View className="pb-40" />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default TimelineScreen;
