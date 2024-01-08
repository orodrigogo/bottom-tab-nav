import { Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Feather from "@expo/vector-icons/Feather"

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedIcon = Animated.createAnimatedComponent(Feather);

type TabBarButtonProps = {
  active: boolean;
  onPress: () => void;
};

export default function TabBarButton({
  active,
  onPress,
}: TabBarButtonProps) {
  const activeValue = useSharedValue(0);

  useEffect(() => {
    activeValue.value = active ? withTiming(1) : withTiming(0);
  }, [active]);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        activeValue.value,
        [0, 1],
        ['#A6A6A6', '#FFFFFF']
      ),
    };
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <AnimatedIcon name="home" size={24} style={animatedStyle} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});