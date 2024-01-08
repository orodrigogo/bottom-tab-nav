import { View, useWindowDimensions } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated"

import { BottomTabButton } from "@/components/bottom_tab_button"

import { TAB_BAR_MARGIN, styles } from "./styles"

export function BottomTab(bottomTabBarProps: BottomTabBarProps) {
  const dimensions = useWindowDimensions()

  const tabBarWidth = dimensions.width - 2 * TAB_BAR_MARGIN
  const tabBarItemWidth = tabBarWidth / bottomTabBarProps.state.routes.length

  const animatedTabContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            tabBarItemWidth * bottomTabBarProps.state.index
          ),
        },
      ],
    }
  })

  return (
    <View style={[styles.container, { width: tabBarWidth }]}>
      <Animated.View
        style={[
          styles.tabContainer,
          { width: tabBarItemWidth },
          animatedTabContainerStyle,
        ]}
      >
        <View style={styles.tabItem} />
      </Animated.View>

      {bottomTabBarProps.state.routes.map((route, index) => {
        const isFocused = bottomTabBarProps.state.index === index
        const { options } = bottomTabBarProps.descriptors[route.key]

        const onPress = () => {
          const event = bottomTabBarProps.navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            bottomTabBarProps.navigation.navigate(route.name, route.params)
          }
        }

        return (
          <BottomTabButton
            key={route.key}
            icon={options.title as any}
            active={isFocused}
            onPress={onPress}
          />
        )
      })}
    </View>
  )
}
