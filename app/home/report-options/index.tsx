import { Href, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const options: { name: string; description: string; path: Href }[] = [
  {
    name: "Campus Maintenance Request",
    description:
      "This allows Students, Faculty, and Staff to report faulty utilities, broken equipment, or hazardous conditions on campus.",
    path: "/home/report-options/campus-maintenance",
  },
  {
    name: "Handbook Violation Report",
    description:
      "This allows Students, Faculty, and Staff to report a violation against the University guidelines or student handbook on campus.",
    path: "/home/report-options/handbook-violation",
  },
];

const Home = () => {
  const router = useRouter();
  return (
    <View>
      {options.map(({ name, description, path }, index) => (
        <View key={index}>
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Button title={"Get Started"} onPress={() => router.push(path)} />
        </View>
      ))}
    </View>
  );
};

export default Home;
