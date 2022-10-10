import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FocusedStatusBar from "../components/FocusedStatusbar";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("deri.netuchi@gmail.com");
  const [password, setPassword] = useState("deri12345");
  const [nativeLoginIsLoading, setNativeLoginIsLoading] = useState(false);
  const [loginWithFacebookIsLoading, setLoginWithFacebookIsLoading] =
    useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const createAccountHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Account created", res);
      })
      .catch((error) => console.log(error));
  };

  const loginHandler = () => {
    setNativeLoginIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const {
          displayName,
          email,
          isVerified,
          expiresIn,
          idToken,
          kind,
          localId,
          refreshToken,
          registered,
        } = res._tokenResponse;
        const { emailVerified } = res.user;
        setNativeLoginIsLoading(false);

        // if (!emailVerified) {
        //   Alert.alert(
        //     "Email belum terverifikasi",
        //     "Periksa email anda atau email spam anda untuk verifikasi akun",
        //     [
        //       {
        //         text: "Mengerti",
        //         onPress: () => null,
        //       },
        //     ]
        //   );
        //   return;
        // }

        Alert.alert("Login Success", `Welcome to Instagram Clone`);
        navigation.navigate("Timeline");
      })
      .catch((error) => {
        setNativeLoginIsLoading(false);
        if (error.code === "auth/user-disabled") {
          Alert.alert(
            "Tidak Bisa Masuk",
            "Akun ini telah dinonaktifkan karena melanggar pedoman komunitas kami. Silakan hubungi kami jika Anda merasa ini adalah kesalahan."
          );
        } else if (error.code === "auth/user-not-found") {
          Alert.alert(
            "Tidak Bisa Menemukan Akun",
            `Kami tidak bisa menemukan akun dengan ${email}. Coba nomor telepon atau email lain, atau jika Anda tidak bisa memiliki akun instagram, Anda bisa mendaftar`,
            [
              {
                text: "Coba Lagi",
                onPress: () => null,
              },
              {
                text: "Daftar",
                onPress: () => navigation.navigate("RegisterScreen"),
              },
            ]
          );
        } else if (error.code === "auth/wrong-password") {
          Alert.alert("Login Failed", "Wrong password");
        } else {
          Alert.alert("Login Failed", error.message);
        }
      });
  };

  const loginWithFacebookHandler = () => {
    setLoginWithFacebookIsLoading(true);
    setTimeout(() => {
      setLoginWithFacebookIsLoading(false);
      Alert.alert("Sorry!", "Login with Facebook is not available yet");
    }, 2000);
  };

  return (
    <>
      <FocusedStatusBar backgroundColor="transparent" />
      <SafeAreaView>
        <View className="h-full">
          <View className="absolute bottom-0 w-full">
            <View className="flex-1 h-[1px] bg-gray-400 mb-4" />
            <Text className="mb-4 text-xs text-center text-gray-500">
              Tidak punya akun?{" "}
              <Text className="font-bold text-blue-900">Buat Akun</Text>.
            </Text>
          </View>
          <ScrollView>
            <Text className="mt-3 text-center text-gray-500">
              Indonesia (Indonesia)
            </Text>
            <View className="mx-7 mt-48">
              <Text
                className="text-6xl text-center my-7"
                style={{ fontFamily: "Billabong" }}
              >
                Instagram
              </Text>
              <TextInput
                className="h-12 pl-4 border-[0.5px] rounded-md placeholder:text-gray-300/80 border-gray-400/80 bg-gray-100/60 mb-4"
                placeholder="Nomor telepon, nama pengguna atau alamat email"
                defaultValue={email}
                onChangeText={(txt) => setEmail(txt)}
              />
              <TextInput
                className="h-12 pl-4 border-[0.5px] rounded-md placeholder:text-gray-300/80 border-gray-400/80 bg-gray-100/60 mb-4"
                placeholder="Kata sandi"
                defaultValue={password}
                onChangeText={(txt) => setPassword(txt)}
              />
              <TouchableOpacity
                className={`items-center justify-center mb-4 rounded-lg h-11 bg-[#0095f6] ${
                  nativeLoginIsLoading === true ? "opacity-30" : "opacity-100"
                }`}
                activeOpacity={0.6}
                onPress={loginHandler}
                disabled={nativeLoginIsLoading}
              >
                {nativeLoginIsLoading ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <Text className="text-white">Masuk</Text>
                )}
              </TouchableOpacity>
              <Text className="mb-4 text-xs text-center text-gray-500">
                Lupa detail login Anda?{" "}
                <Text className="font-bold text-blue-900">
                  Dapatkan bantuan untuk login
                </Text>
              </Text>
              <View className="flex-row items-center mb-4">
                <View className="flex-1 h-[1px] bg-gray-400" />
                <View>
                  <Text className="w-[50px] text-center text-gray-400">
                    ATAU
                  </Text>
                </View>
                <View className="flex-1 h-[1px] bg-gray-400" />
              </View>
              <TouchableOpacity
                className={`flex-row items-center justify-center mb-4 rounded-lg h-11 bg-[#0095f6] ${
                  loginWithFacebookIsLoading === true
                    ? "opacity-30"
                    : "opacity-100"
                }`}
                activeOpacity={0.6}
                disabled={loginWithFacebookIsLoading}
                onPress={loginWithFacebookHandler}
              >
                {loginWithFacebookIsLoading ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <>
                    <View className="items-center justify-center w-6 h-6 mr-1 bg-white rounded-full">
                      <Text className="translate-y-2 text-4xl font-bold text-[#0095f6]">
                        f
                      </Text>
                    </View>
                    <Text className="text-white">Masuk Dengan Facebook</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
