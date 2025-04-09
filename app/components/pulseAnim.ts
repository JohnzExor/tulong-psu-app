import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export function usePulseAnimation(): Animated.Value {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.6, // Reduce opacity to 60%
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1, // Restore opacity to 100%
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  return pulseAnim;
}