import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const fetchData = async () => {
  try {
    const data = await fetch("http://localhost:3002/");
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

const ReportProgress = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-reports"],
    queryFn: fetchData,
  });

  const reports: {
    id: string;
    reportType: string;
  }[] = data ? data : [];

  return (
    <ScrollView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error fetching data</Text>
      ) : reports.length === 0 ? (
        <Text>No Reports</Text>
      ) : (
        reports.map(({ id, reportType }, index) => (
          <View key={index}>
            <Text>{reportType}</Text>
            <Link
              href={{
                pathname: "/home/report-progress/report/[id]",
                params: { id: id },
              }}
            >
              View Report
            </Link>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default ReportProgress;
