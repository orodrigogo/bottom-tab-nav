import { Tabs } from "expo-router"

import { BottomTab } from "@/components/bottom_tab"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTab {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="videos" options={{ title: "youtube" }} />
      <Tabs.Screen name="profile" options={{ title: "user" }} />
    </Tabs>
  )
}
