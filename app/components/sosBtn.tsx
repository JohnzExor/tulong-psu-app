import { View, TouchableOpacity, Text } from "react-native";

interface SOSButtonProps {
  text?: string;
  onPress?: () => void;
}

export default function SOSButton({
  text,
  onPress,
}: SOSButtonProps) {

  return (
    <View className="flex flex-col items-center justify-center h-[20em]">
      <TouchableOpacity
        onPress={onPress}
        className="flex flex-col justify-center items-center relative"
      >
        <View
          className=" absolute rounded-full bg-red-50 dark:bg-red-300 h-[18em] w-[18em] animate-pulse shadow-xl"
        />
        <View
          className=" absolute rounded-full bg-red-100 dark:bg-red-400 h-[15em] w-[15em] animate-pulse shadow-xl"
        />
        <View
          className=" absolute rounded-full bg-red-300 dark:bg-red-500 h-[12em] w-[12em] animate-pulse shadow-xl"
        />
        <View
          className="flex flex-col justify-center items-center rounded-full bg-red-500 dark:bg-red-700 disabled:bg-red-300  text-white h-[10em] w-[10em] z-20 shadow-xl"
        >
          {text ? (
            <Text className="text-5xl font-bold"
            >
              {text}
            </Text>
          ): null}
        </View>
      </TouchableOpacity>
    </View>
    
  );
}
