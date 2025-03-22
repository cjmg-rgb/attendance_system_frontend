import { View, Text } from 'react-native'
import React  from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
            fontSize: 12
        },
    }}>
        <Tabs.Screen
            name='Home'
            options={{
                title: "Home",
            }}
        />
        <Tabs.Screen
            name='Scan'
            options={{
                title: "Scan"
            }}
        />
    </Tabs>
  )
}

export default TabsLayout