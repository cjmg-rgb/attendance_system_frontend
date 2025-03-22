import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'

import "../global.css";

const RootLayout = () => {
  return (
    <PaperProvider>
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }}  />
        </Stack>
    </PaperProvider>
  )
  
}

export default RootLayout