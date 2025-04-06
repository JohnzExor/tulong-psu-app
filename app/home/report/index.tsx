import { Link } from "expo-router";
import { Text, View } from "react-native";
import SOSButton from "@/app/components/sosBtn";


const Home = () => {
  return (
    <View className="gap-4">
      <Text>Home</Text>
      <View>
        <Text>Are you in a emergency?</Text>
        <Text>Press the button below and help will reach you soon.</Text>
      </View>
      <View className="justify-center items-center">
        <SOSButton
          outerSize={300}
          middleSize={250}
          innerSize={200}
          innermostSize={150}
          text="SOS"
          onPress={() => console.log("SOS Button Pressed")}
        />
      </View>
      
      <Link href={{ pathname: "/home/report/campus-maintenance" }}>
        <Text>Campus Maintenance Request</Text>
        <Text>
          This allows students, faculty, and staff to report faulty utilities,
          broken equipment, or hazardous conditions on campus.
        </Text>
      </Link>
      <Link href={{ pathname: "/home/report/handbook-violation" }}>
        <Text>Handbook Violation Report</Text>
        <Text>
          This allows students, faculty, and staff to report a violation against
          the University guidelines or student handbook on campus.
        </Text>
      </Link>
    </View>
  );
};

export default Home;
