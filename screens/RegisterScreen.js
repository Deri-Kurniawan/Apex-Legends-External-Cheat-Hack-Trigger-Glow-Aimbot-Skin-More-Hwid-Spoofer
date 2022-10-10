import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("example@mail.com");
  const [password, setPassword] = useState("example123");
  const [registrationIsLoading, setRegistrationIsLoading] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const registrationHandler = () => {
    setRegistrationIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setRegistrationIsLoading(false);
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

        Alert.alert(
          "Daftar berhasil!",
          "Silahkan verfikasi email anda untuk melanjutkan"
        );

        navigation.navigate("Login");
      })
      .catch((error) => {
        setRegistrationIsLoading(false);
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Email telah digunakan", "Silahkan gunakan email lain");
          return;
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("Email tidak valid", "Harap masukkan email yang valid");
          return;
        }
        if (error.code === "auth/weak-password") {
          Alert.alert(
            "Kata sandi terlalu lemah",
            "Kata sandi harus memiliki minimal 6 karakter"
          );
          return;
        }
        Alert.alert("Error", "Something went wrong");
        console.log(error);
      });
  };

  return (
    <SafeAreaView>
      <View className="mx-8">
        <Text className="text-2xl text-center mt-4 mb-3">Daftar Akun</Text>
        <Text className="text-sm text-gray-400 text-center mb-4">
          Anda selalu dapat mengubahnya nanti.
        </Text>
        <TextInput
          className="h-12 pl-4 border-[0.5px] rounded-md placeholder:text-gray-300/80 border-gray-400/80 bg-gray-100/60 mb-4"
          placeholder="Alamat email"
          defaultValue={email}
          onChangeText={(txt) => {
            txt = txt.toLowerCase();
            setEmail(txt);
          }}
        />
        <TextInput
          className="h-12 pl-4 border-[0.5px] rounded-md placeholder:text-gray-300/80 border-gray-400/80 bg-gray-100/60 mb-4"
          placeholder="Kata sandi"
          defaultValue={password}
          onChangeText={(txt) => setPassword(txt)}
        />
        <TouchableOpacity
          className={`items-center justify-center mb-4 rounded-lg h-11 bg-[#0095f6] ${
            registrationIsLoading === true ? "opacity-30" : "opacity-100"
          }`}
          activeOpacity={0.6}
          onPress={registrationHandler}
          disabled={registrationIsLoading}
        >
          {registrationIsLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text className="text-white">Daftar</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
