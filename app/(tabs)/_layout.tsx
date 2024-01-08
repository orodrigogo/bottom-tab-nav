import { Tabs } from 'expo-router';

import AnimatedBottomTabBar from '../components/AnimatedBottomTabBar';

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <AnimatedBottomTabBar {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="videos" />
      <Tabs.Screen name="about" />
    </Tabs>
  )
}