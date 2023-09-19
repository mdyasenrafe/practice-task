import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomText from "../../theme/text/CustomText";
import { Feather } from "@expo/vector-icons";
import { ProductsData } from "../../Datas/ProductsData";
import ProductCard from "../ProductCard";

export default function RelatedProducts() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText preset="p2_medium" style={{ color: "#1E1C1A" }}>
          Related Products on Rent
        </CustomText>
        <View style={styles.see_all_area}>
          <View style={styles.see_all}>
            <CustomText style={styles.see_all_text} preset="p3_medium">
              See All
            </CustomText>
          </View>
          <Feather name="chevron-right" size={16} color="#8E00DB" />
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 27 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {ProductsData.map((item: ProductType, index) => (
          <ProductCard item={item} index={index} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 46,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  see_all_area: {
    flexDirection: "row",
    alignItems: "center",
  },
  see_all: {
    borderBottomWidth: 1,
    borderBottomColor: "#8F00DB",
  },
  see_all_text: {
    color: "#8E00DB",
  },
});
