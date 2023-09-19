import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import SellerInformation from "../components/SellerInformation";
import CustomText from "../theme/text/CustomText";

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.sub_container}>
        <SellerInformation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  sub_container: {
    paddingHorizontal: 24,
  },
});
