import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "../../global.css";
export default Sentry.wrap(function RootLayout() {
  const colorScheme = useColorScheme();

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error("Add your Clerk Publishable Key to the .env file");
  }

  Sentry.init({
    dsn: "https://b53de6777482c36e5feb98e021621cf4@o4511264505200640.ingest.us.sentry.io/4511339274174464",

    integrations: [Sentry.feedbackIntegration()],
  });
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <KeyboardProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
      </KeyboardProvider>
    </ClerkProvider>
  );
});
