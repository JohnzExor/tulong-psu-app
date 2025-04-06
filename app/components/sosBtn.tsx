import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated, Text, StyleSheet } from "react-native";

interface SOSButtonProps {
  outerSize: number;
  middleSize: number;
  innerSize: number;
  innermostSize: number;
  text?: string;
  onPress?: () => void;
}

export default function SOSButton({
  outerSize,
  middleSize,
  innerSize,
  innermostSize,
  text,
  onPress,
}: SOSButtonProps) {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.5, // Reduce opacity to 50%
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

  return (
      <TouchableOpacity
        onPress={onPress}
        className="justify-center items-center"
        style={{
          width: outerSize,
          height: outerSize,
        }}
      >
        {/* Outer Layer */}
        <Animated.View
          className="bg-red-50 absolute justify-center items-center"
          style={{
            width: outerSize,
            height: outerSize,
            borderRadius: outerSize / 2, // Ensures a perfect circle
            opacity: pulseAnim, // Bind the animation to opacity
          }}
        >
          {/* Middle Layer */}
          <View
            className="bg-red-100 justify-center items-center"
            style={{
              width: middleSize,
              height: middleSize,
              borderRadius: middleSize / 2, // Ensures a perfect circle
            }}
          >
            {/* Inner Layer */}
            <View
              className="bg-red-300 justify-center items-center"
              style={{
                width: innerSize,
                height: innerSize,
                borderRadius: innerSize / 2, // Ensures a perfect circle
              }}
            />
          </View>
        </Animated.View>

        {/* Innermost Layer */}
        <View
          className="bg-red-500 absolute justify-center items-center"
          style={{
              width: innermostSize,
              height: innermostSize,
              borderRadius: innermostSize / 2,
            }} // Ensures a perfect circle
        >
          {text ? (
            <Text
              style={{
                fontSize: innermostSize / 4, // Dynamically adjust text size
                color: "white",
                textAlign: "center",
              }}
            >
              {text}
            </Text>
          ): null}
        </View>
      </TouchableOpacity>
  );
}