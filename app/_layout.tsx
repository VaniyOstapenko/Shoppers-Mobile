import { Stack } from "expo-router";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded] = useFonts({
    InterSemiBold: require("../assets/fonts/InterSemiBold.ttf"),
    InterRegular: require("../assets/fonts/InterRegular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="/logIn" />
    </Stack>
  );
}
