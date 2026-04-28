import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }
  console.log("SIGNED IN:", isSignedIn);
  console.log("LOADED:", isLoaded);
  return <Stack screenOptions={{ headerShown: false }} />;
}
