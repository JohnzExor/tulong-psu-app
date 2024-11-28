import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

const fetchData = async (userId: string) => {
  try {
    const data = await fetch(`http://localhost:3002/api/users/view/${userId}`);
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

const BehaviorScore = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user", "202180030"],
    queryFn: ({ queryKey }) => fetchData(queryKey[1]),
  });

  const user: {
    id: string;
    firstName: string;
    lastName: string;
    behaviorScore: string;
  } = data;

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error fetching data</Text>
      ) : !data ? (
        <Text>No data</Text>
      ) : (
        <View>
          <Text>{user.id}</Text>
          <Text>{user.firstName}</Text>
          <Text>{user.lastName}</Text>
          <Text>{user.behaviorScore}</Text>
        </View>
      )}
    </View>
  );
};

export default BehaviorScore;
