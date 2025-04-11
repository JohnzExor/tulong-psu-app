import React from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback, Button } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const screenWidth = Dimensions.get("window").width;
  const sidebarWidth = screenWidth * 0.80;
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
        <View>
          <Text className="text-lg text-muted-foreground font-semibold">Reporting</Text>
          <Link href={"/home/report"} onPress={onClose}>
            <View className="flex-row items-center gap-3 rounded-lg p-3 text-sm duration-200 font-medium">
              <MaterialCommunityIcons name="clipboard-plus-outline" size={24} color="black" />
              <Text>Emergency Call</Text>
            </View>
          </Link>
          <Link href={"/home/report/report-choices/campus-maintenance"} onPress={onClose}>
              <View className="flex-row items-center gap-3 rounded-lg p-3 text-sm duration-200 font-medium">
                <MaterialCommunityIcons name="clipboard-list-outline" size={24} color="black" />
                <Text>Campus Maintenance</Text>
              </View>
          </Link>
            <Link href={"/home/report/report-choices/handbook-violation"} onPress={onClose}>
            <View className="flex-row items-center gap-3 rounded-lg p-3 text-sm duration-200 font-medium">
                <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="black" />
                <Text>Handbook Violation</Text>
            </View> 
          </Link>
        </View>
        <View>
          <Text className="text-lg text-muted-foreground font-semibold">Others</Text>
          <Link href={"/home/report-progress"} onPress={onClose}>
            <View className="flex-row items-center gap-3 rounded-lg p-3 text-sm duration-200 font-medium">
              <Ionicons name="document-text-outline" size={24} color="black" />
              <Text>Report Progress</Text>
            </View>
          </Link>
          <Link href={"/home/handbook"} onPress={onClose}>
              <View className="flex-row items-center gap-3 rounded-lg p-3 text-sm duration-200 font-medium">
                <Feather name="book" size={24} color="black" />
                <Text>Student Handbook</Text>
              </View>
          </Link>
            <Link href={"/home/settings"} onPress={onClose}>
            <View className="flex-row items-center gap-3 rounded-lg p-3 text-sm duration-200 font-medium">
              <SimpleLineIcons name="settings" size={24} color="black" />
              <Text>Settings</Text>
            </View> 
          </Link>
        </View>
        <View>
          <Text className="text-lg text-muted-foreground font-semibold">Account</Text>
          {/** Account HERE papi
           */}
        </View>
        <View className="flex-1 justify-end w-[74%] ">
          <TouchableOpacity 
            onPress={() => console.log('Signed Out')} 
            className="flex-row items-center justify-center border bg-background py-3 rounded-lg"
          >
            <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
            <Text className="text-muted-foreground text-center font-bold">Sign out</Text>
          </TouchableOpacity>
        </View>
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