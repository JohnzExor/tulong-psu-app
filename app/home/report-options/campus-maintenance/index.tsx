import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, Text, TextInput, View } from "react-native";

const CampusMaintenanceRequest = () => {
  const { control } = useForm();
  return (
    <SafeAreaView>
      <View>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput {...field} placeholder="Report name" />
          )}
          name="report"
          rules={{ required: "You must enter your name" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CampusMaintenanceRequest;
