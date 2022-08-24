import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  TouchableNativeFeedback,
  Linking,
  TouchableHighlight,
} from "react-native";
import FocusedStatusBar from "../components/FocusedStatusbar";
import Navbar from "../components/Navbar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import abbreviateNumber, { INDONESIAN_SYMBOL } from "../utils/abbreviateNumber";

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <FocusedStatusBar backgroundColor="transparent" />
      <Navbar navigation={navigation} />
      <SafeAreaView>
        <View className="px-4">
          <View className="flex flex-row justify-between items-center py-2">
            <View className="flex flex-row items-center">
              <TouchableOpacity
                activeOpacity={0.5}
                className="pr-2"
                onPress={() => navigation.goBack()}
              >
                <AntDesign size={27} name="arrowleft" />
              </TouchableOpacity>
              <Text className="font-bold text-xl ml-4 p-2">deri561</Text>
            </View>
            <View className="flex flex-row items-center">
              <Pressable
                className="py-2 px-3"
                onPress={() => console.log("Notification clicked")}
              >
                <Image
                  className="w-5 h-5"
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/5948/5948901.png",
                  }}
                />
              </Pressable>
              <Pressable
                className="py-2 px-3"
                onPress={() => console.log("More clicked")}
              >
                <Feather size={20} name="more-vertical" />
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <View className="flex flex-row justify-evenly items-center w-full">
            <Image
              className="w-[72px] h-[72px] rounded-full"
              source={{
                uri: "https://images.unsplash.com/photo-1515734674582-29010bb37906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              }}
            />
            <View className="flex flex-row items-center">
              <TouchableNativeFeedback
                onPress={() => console.log("Postingan Clicked")}
              >
                <View className="flex items-center justify-center p-4">
                  <Text className="text-center font-bold text-lg">1</Text>
                  <Text className="text-center">Postingan</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => console.log("Pengikut Clicked")}
              >
                <View className="flex items-center justify-center p-4">
                  <Text className="text-center font-bold text-lg">
                    {abbreviateNumber(123456, INDONESIAN_SYMBOL)}
                  </Text>
                  <Text className="text-center">Pengikut</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => console.log("Mengikuti Clicked")}
              >
                <View className="flex items-center justify-center p-4">
                  <Text className="text-center font-bold text-lg">6</Text>
                  <Text className="text-center">Mengikuti</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
        <View className="px-4 py-2">
          <Text>Deri Kurniawan</Text>
          <Text className="text-gray-400">Kreator Digital</Text>
          <Text>Ini Contoh Deskripsi Ngasal</Text>
          <Text
            className="text-blue-900"
            onPress={() => Linking.openURL("https://deri-kurniawan.vercel.app")}
          >
            deri-kurniawan.vercel.app
          </Text>
          <View className="flex flex-row items-center">
            <View className="flex flex-row py-3">
              {/* Stack Image */}
              <Image
                className="w-6 h-6 rounded-full z-50"
                source={{
                  uri: "https://images.unsplash.com/photo-1515734674582-29010bb37906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                }}
              />
              <Image
                className="w-6 h-6 rounded-full z-40 -translate-x-2"
                source={{
                  uri: "https://images.unsplash.com/photo-1515734674582-29010bb37906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                }}
              />
              <Image
                className="w-6 h-6 rounded-full z-30 -translate-x-4"
                source={{
                  uri: "https://images.unsplash.com/photo-1515734674582-29010bb37906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                }}
              />
            </View>
            <Text className="text-xs">
              Diikuti oleh <Text className="font-bold">username__</Text> dan{" "}
              <Text className="font-bold">username2__</Text>
            </Text>
          </View>
          <View className="flex flex-row">
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex flex-grow justify-center items-center bg-gray-100 py-2 rounded-lg"
              onPress={() => console.log("Mengikuti Clicked")}
            >
              <Text>
                Mengikuti{" "}
                <SimpleLineIcon size={10} color="black" name="arrow-down" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex flex-grow justify-center items-center bg-gray-100 py-2 mx-2 rounded-lg"
              onPress={() => console.log("Kirim Pesan Clicked")}
            >
              <Text>Kirim Pesan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex flex-grow justify-center items-center bg-gray-100 py-2 rounded-lg"
              onPress={() => console.log("Kontak Clicked")}
            >
              <Text>Kontak</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Tabs User profile */}
        <View></View>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
