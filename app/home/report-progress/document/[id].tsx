import { serverUrl } from "@/app/lib/server";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const fetchData = async (id: string) => {
  try {
    const data = await fetch(`${serverUrl}/api/reports/document/${id}`);
    const res = await data.json();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const ViewReport = () => {
  const { id } = useLocalSearchParams();
  const {
    isLoading,
    isError,
    data: data,
  } = useQuery({
    queryKey: ["view-report"],
    queryFn: () => fetchData(id as string),
  });

  const report: { reportType: string; status: string } = data;

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
          <Text>{report.status}</Text>
        </View>
      )}
    </View>
  );
};

export default ViewReport;
