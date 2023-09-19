import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SellerInformation from "../components/SellerInformation";
import CustomText from "../theme/text/CustomText";
import TrendingProducts from "../components/TrendingProducts";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.sub_container}>
        <SellerInformation />
        <TrendingProducts />
        <RelatedProducts />
      </ScrollView>
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
