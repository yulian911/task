import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NativeBaseProvider } from 'native-base'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    AeonikMedium: require('../assets/fonts/Aeonik-Medium.otf'),
    AeonikRegular: require('../assets/fonts/Aeonik-Regular.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <NativeBaseProvider>
      <Stack onLayout={onLayoutRootView} screenOptions={{ headerShown: false }} />
    </NativeBaseProvider>
  )
}
