import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import TimelineScreen from "./screens/TimelineScreen";
import { useFonts } from "expo-font";
import ProfileScreen from "./screens/ProfileScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ReelsScreen from "./screens/ReelsScreen";
import MarketPlaceScreen from "./screens/MarketPlaceScreen";
import HomeFeedLikerScreen from "./screens/HomeFeedLikerScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    Billabong: require("./assets/fonts/FontsFree-Net-Billabong.ttf"),
  });

  if (!loaded) return null;

  return (
    <TailwindProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen
            options={{ animation: "none" }}
            name="Timeline"
            component={TimelineScreen}
          />
          <Stack.Screen
            options={{ animation: "none" }}
            name="Explore"
            component={ExploreScreen}
          />
          <Stack.Screen
            options={{ animation: "none" }}
            name="Reels"
            component={ReelsScreen}
          />
          <Stack.Screen
            options={{ animation: "none" }}
            name="MarketPlace"
            component={MarketPlaceScreen}
          />
          <Stack.Screen
            options={{ animation: "none" }}
            name="Profile"
            component={ProfileScreen}
          />
          <Stack.Screen
            options={{ animation: "slide_from_right" }}
            name="HomeFeedLiker"
            component={HomeFeedLikerScreen}
          />
          <Stack.Screen
            options={{ animation: "fade_from_bottom" }}
            name="Login"
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
