import { useEffect } from "react"
import { Pressable } from "react-native"
import Feather from "@expo/vector-icons/Feather"

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

const AnimatedIcon = Animated.createAnimatedComponent(Feather)

import { styles } from "./styles"

interface TabBarButtonProps {
  active: boolean
  icon: keyof typeof Feather.glyphMap
  onPress: () => void
}

enum BUTTON_STATUS {
  ACTIVE = 0,
  INACTIVE = 1,
}

export function BottomTabButton({ active, icon, onPress }: TabBarButtonProps) {
  const activeValue = useSharedValue<BUTTON_STATUS>(BUTTON_STATUS.INACTIVE)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        activeValue.value,
        [BUTTON_STATUS.INACTIVE, BUTTON_STATUS.ACTIVE],
        ["#A6A6A6", "#00E6B1"]
      ),
    }
  })

  useEffect(() => {
    activeValue.value = active
      ? withTiming(BUTTON_STATUS.ACTIVE)
      : withTiming(BUTTON_STATUS.INACTIVE)
  }, [active])

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <AnimatedIcon name={icon} size={22} style={animatedStyle} />
    </Pressable>
  )
}
