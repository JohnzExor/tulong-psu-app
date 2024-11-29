import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const fetchData = async (id: string) => {
  try {
    const data = await fetch(`http://localhost:3002/${id}`);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

const ViewReport = () => {
  const { id } = useLocalSearchParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["view-report"],
    queryFn: () => fetchData(id as string),
  });

  const report: { reportType: string } = data;

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
          <Text>{report.reportType}</Text>
        </View>
      )}
    </View>
  );
};

export default ViewReport;
