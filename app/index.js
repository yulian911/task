import { SafeAreaView, StyleSheet } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { Box, Image, Text } from 'native-base'
import { Dimensions } from 'react-native'
import assets from '../constans/assets'
import { COLORS, FONTS, Icons, SHADOWS } from '../constans/theme'
import Button from '../components/Button'

const { width, height } = Dimensions.get('window')

export default function Home() {
  // const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <Image source={assets.background} style={styles.image} alt="background" />
      <Image
        source={assets.dot}
        alt="dot"
        style={{ position: 'absolute', top: height / 3, left: width / 3 }}
      />
      <Image
        source={assets.gate}
        alt="gate"
        style={{ position: 'absolute', top: height / 3.5, right: 0 }}
      />
      <Image
        source={assets.line}
        alt="line"
        style={{ position: 'absolute', top: height / 3, left: 0 }}
      />
      <Image
        source={assets.smile}
        alt="smile"
        style={{ position: 'absolute', top: height / 2.27, left: width / 1.5 }}
      />

      <StatusBar style="light" />
      <Box style={styles.boxImage} alignItems={'center'} flex={1}>
        <Image source={assets.header} objectFit={'contain'} alt="header" mt={height / 12} />
        <Box
          mt={height / 3.54}
          w={width}
          flex={1}
          bgColor={COLORS.primary}
          borderTopRadius={60}
          borderWidth={1}
          borderColor={COLORS.secondary}
          alignItems={'center'}
          style={{ ...SHADOWS.medium }}>
          <Text fontFamily={FONTS.medium} color={COLORS.outlineText} my={4} fontSize={9}>
            MASZ JUŻ KONTO?
          </Text>
          <Button mode="filled" text="Załoguj się" />
          <Box my={4}>
            <Button mode="simple" text="LUB ZAREJESTRUJ SIĘ" />
          </Box>
          <Box flex={1} alignItems={'center'} width={'100%'} style={{ gap: 8 }}>
            <Button
              mode="outline"
              type={Icons.MaterialCommunityIcons}
              icon="gmail"
              text="Użyj konta Google"
              color={COLORS.gmail}
            />
            <Button
              mode="outline"
              type={Icons.MaterialIcons}
              icon="facebook"
              text="Użyj konta Facebook"
              color={COLORS.blue}
            />
            <Button
              mode="outline"
              type={Icons.MaterialCommunityIcons}
              icon="apple"
              text="Użyj konta Apple"
              color={COLORS.black}
            />
            <Button
              mode="outline"
              type={Icons.MaterialIcons}
              icon="email"
              text="Zarejestruj się E-mail"
              color={COLORS.secondary}
            />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width,
    height: height / 1.8,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  boxImage: {
    height: height / 1.4,
  },
  imageBox: {
    width: 100,
    height: 100,
  },
})
