import React from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const screenWidth = Dimensions.get("window").width;
  const sidebarWidth = screenWidth * 0.75;
  const animation = React.useRef(new Animated.Value(screenWidth)).current;

  React.useEffect(() => {
    if (isOpen) {
      Animated.timing(animation, {
        toValue: screenWidth - sidebarWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen]);

  return (
    <>
      <Animated.View
        style={{
          width: sidebarWidth,
          transform: [{ translateX: animation }],
        }}
        className="absolute right-0 top-0 bottom-0 bg-background p-5 z-50"
      >
        <View className="flex-row mb-5">
          <TouchableOpacity
            onPress={onClose}
            className="flex-1"
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className="text-2xl font-semibold text-foreground py-2">TULONG!</Text>
        <TouchableOpacity className="mb-4">
          <Text className="text-black text-base">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-4">
          <Text className="text-black text-base">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-4">
          <Text className="text-black text-base">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-4">
          <Text className="text-black text-base">Logout</Text>
        </TouchableOpacity>
      </Animated.View>

      {isOpen && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40" />
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default Sidebar;