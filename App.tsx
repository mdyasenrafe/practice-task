import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomText from "./src/theme/text/CustomText";
import ProductListing from "./src/screens/ProductListingScreens";
import { NavigationContainer } from "@react-navigation/native";
import ProductsListingRoute from "./src/routes/ProductsListingRoute";
import ProductDetails from "./src/screens/ProductDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ProductListingRoute"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="ProductListingRoute"
            component={ProductsListingRoute}
          />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>

        <StatusBar style="auto" />
      </NavigationContainer>
    </>
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
