import { serverUrl } from "@/app/lib/server";
import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

const fetchData = async (userId: string) => {
  try {
    const data = await fetch(`${serverUrl}/api/user/${userId}`);
    const res = await data.json();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const ViewReport = () => {
  const {
    isLoading,
    isError,
    data: data,
  } = useQuery({
    queryKey: ["view-user"],
    queryFn: () => fetchData("202180030"),
  });

  const report: {
    id: string;
    firstName: string;
    lastName: string;
    behaviorScore: number;
  } = data;

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error fetching data</Text>
      ) : !data ? (
        <Text>No Data</Text>
      ) : (
        <View>
          <Text>
            {report.firstName} {report.lastName}
          </Text>
          <Text>{report.id}</Text>
          <Text>{report.behaviorScore}</Text>
        </View>
      )}
    </View>
  );
};

export default ViewReport;
