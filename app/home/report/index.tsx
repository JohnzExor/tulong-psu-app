import { Link } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import SOSButton from "@/app/components/sosBtn";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";


const Home = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView>
          <View className="px-8 pb-4 pt-4 md:pb-0 md:p-10 flex flex-col items-center gap-7">
            <View className="space-y-4">
              <Text className="md:text-2xl text-lg font-semibold flex items-center gap-2 text-red-500">Are you in a emergency?</Text>
              <Text>Press the button below and help will reach you soon.</Text>
            </View>
            <View className="w-full space-y-4 gap-4">
              <View className="bg-background p-4 rounded-xl space-y-2 border border-primary">
                <Text className="font-bold text-primary">Your current location</Text>
                <View className="gap-1 text-sm text-primary">
                  <Text className="animate-pulse">Getting your current location</Text>
                </View>
              </View>
            </View>
            <View className="justify-center items-center">
              <SOSButton
                text="SOS"
                onPress={() => console.log("SOS Button Pressed")}
              />
            </View>
            <View className="space-y-4 border border-primary rounded-xl p-4 bg-card text-card-foreground w-full">
              <View className="flex gap-1 text-md">
                <Text className="text-primary font-medium text-center">
                  Palawan State University Contact Services
                </Text>
              </View>
              <View className="space-y-6">
                <View className="flex gap-1 text-sm">
                  <Text className="font-medium">0994 904 3987</Text>
                  <Text className="text-xs">Call this number for immediate emergency assistance.</Text>
                </View>
                <View className="flex gap-1 text-sm">
                  <Text className="font-medium">Healthservices@psu.palawan.edu.ph</Text>
                  <Text className="text-xs">Email for non-urgent health-related inquiries.</Text>
                </View>
                <View className="flex gap-1 text-sm">
                  <Text className="font-medium">Palawan State University Health Services</Text>
                  <Text className="text-xs">Visit the official Facebook Page for updates and information.</Text>
                </View>
              </View>
            </View>
            
            <Link href={{ pathname: "/home/report/report-choices/campus-maintenance" }}>
              <Text>Campus Maintenance Request</Text>
            </Link>
            <Link href={{ pathname: "/home/report/report-choices/handbook-violation" }}>
              <Text>Handbook Violation Report</Text>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
