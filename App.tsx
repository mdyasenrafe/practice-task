import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    regular: require("./assets/fonts/Satoshi-Regular.otf"),
    meduim: require("./assets/fonts/Satoshi-Medium.otf"),
    bold: require("./assets/fonts/Satoshi-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
