import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

interface HeaderProps {
  onMenuPress?: () => void;
}

const Header = ({ onMenuPress }: HeaderProps) => {
  return (
    <View className="flex-row items-center justify-between w-full border bg-background shadow-xl px-4 py-2 rounded-full">
    {/**LOGO HERE pahingi logo yawa */}
      <Link className="text-xl font-semibold tracking-tighter " href={"/home/report"}>TULONG!</Link>
      <TouchableOpacity
        onPress={onMenuPress}
        className="bg-transparent px-3 py-1 rounded"
      >
        <AntDesign name="menufold" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;