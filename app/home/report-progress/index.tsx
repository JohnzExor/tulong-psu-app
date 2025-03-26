import { serverUrl } from "@/app/lib/server";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const fetchData = async () => {
  try {
    const data = await fetch(`${serverUrl}/api/reports/202180030`);
    const res = await data.json();
    return res.data;
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
    problemTypes: {
      name: string;
      description: string;
      reports: {
        id: string;
        status: string;
      }[];
    }[];
  }[] = data ? data : [];

  return (
    <ScrollView className="p-4">
      <Text className="mb-4">
        View all your reports and track their current status.
      </Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error fetching data</Text>
      ) : reports.length === 0 ? (
        <Text>No Reports</Text>
      ) : (
        <View className="flex flex-col gap-4">
          {reports.map(({ id, reportType, problemTypes }) =>
            problemTypes.map(({ reports, description, name }) =>
              reports.map(({ id, status }, index) => (
                <View key={index} className="bg-white p-4 rounded-xl">
                  <View className="flex flex-row items-center justify-between">
                    <Text>{name}</Text>
                    <Text>{status}</Text>
                  </View>
                  <Text>{description}</Text>
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
            )
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default ReportProgress;
