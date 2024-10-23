import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Onboard" options={{ title: 'Onboarding' }} />
      <Stack.Screen name="Home" options={{ title: 'Home' }} />
    </Stack>
  );
}
