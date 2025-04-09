import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated, Text } from "react-native";
import { usePulseAnimation } from "./pulseAnim";

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
  const pulseAnim = usePulseAnimation();

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
          className="bg-red-50 absolute justify-center items-center shadow-xl"
          style={{
            width: outerSize,
            height: outerSize,
            borderRadius: outerSize / 2,
            opacity: pulseAnim, 
          }}
        >
          {/* Middle Layer */}
          <Animated.View
            className="bg-red-100 justify-center items-center shadow-xl"
            style={{
              width: middleSize,
              height: middleSize,
              borderRadius: middleSize / 2,
              opacity: pulseAnim,
            }}
          >
            {/* Inner Layer */}
            <Animated.View
              className="bg-red-300 justify-center items-center shadow-xl"
              style={{
                width: innerSize,
                height: innerSize,
                borderRadius: innerSize / 2,
                opacity: pulseAnim,
              }}
            />
          </Animated.View>
        </Animated.View>

        {/* Innermost Layer */}
        <View
          className="bg-red-300 absolute justify-center items-center shadow-black"
          style={{
              width: innermostSize,
              height: innermostSize,
              borderRadius: innermostSize / 2,
            }}
        >
          {text ? (
            <Text
              style={{
                fontSize: innermostSize / 4,
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