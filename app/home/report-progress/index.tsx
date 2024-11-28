import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const fetchData = async (userId: string) => {
  try {
    const data = await fetch(
      `http://localhost:3002/api/reports/user/${userId}`
    );
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

const ReportProgress = () => {
  const userId = "202180030";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-reports", userId],
    queryFn: ({ queryKey }) => fetchData(queryKey[1]),
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
