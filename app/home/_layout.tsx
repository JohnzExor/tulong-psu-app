import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="person-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="report-progress"
        options={{
          title: "Progress",

          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="analytics-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="report-options"
        options={{
          title: "Report",
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="handbook/index"
        options={{
          title: "Handbook",

          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="book-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="settings-outline" />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
