import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="behavior-score/index"
        options={{
          headerShown: false, // Remove header
          tabBarLabel: "Behavior Score", // Custom tab name
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="person-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="report-progress"
        options={{
          headerShown: false, // Remove header
          tabBarLabel: "Report Progress", // Custom tab name
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="analytics-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          headerShown: false, // Remove header
          tabBarLabel: "Home", // Custom tab name
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="handbook/index"
        options={{
          headerShown: false, // Remove header
          tabBarLabel: "Handbook", // Custom tab name
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="book-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          headerShown: false, // Remove header
          tabBarLabel: "Settings", // Custom tab name
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="settings-outline" />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;