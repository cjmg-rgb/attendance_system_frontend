import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'

import "../global.css";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RootLayout = () => {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <SafeAreaProvider>
        <SafeAreaView className='flex-1'>
          <PaperProvider>
              <Stack>
                  <Stack.Screen name='(tabs)' options={{ headerShown: false }}  />
              </Stack>
          </PaperProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
  
}

export default RootLayout