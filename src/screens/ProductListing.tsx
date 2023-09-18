import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import CustomText from "../theme/text/CustomText";
import { CategoriesData, SubCategoriesData } from "../Datas/CategoriesData";
import { ProductsData } from "../Datas/ProductsData";
import { screenWidth } from "../theme/Theme";
import ProductCard from "../components/ProductCard";

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TextInput
            placeholder="I am looking for ..."
            style={styles.input}
            placeholderTextColor="#717372"
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 14 }}
          >
            {CategoriesData.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setSelectedCategory(category.name)}
                style={[
                  styles.category,
                  {
                    backgroundColor: category.color,
                    borderWidth: selectedCategory === category.name ? 1 : 0,
                  },
                ]}
              >
                <CustomText
                  preset="p4_medium"
                  style={{
                    color:
                      selectedCategory === category.name
                        ? "#8F00DB"
                        : "#3C3C3C",
                  }}
                >
                  {category.name}
                </CustomText>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.subcategory_area}>
            {SubCategoriesData.map((subcategory) => (
              <TouchableOpacity
                key={subcategory.id}
                style={[
                  styles.category,
                  {
                    backgroundColor: "#F8F7FF",
                  },
                ]}
              >
                <CustomText
                  preset="p5_medium"
                  style={{
                    color: "#3C3C3C",
                  }}
                >
                  {subcategory.name}
                </CustomText>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.card_area}>
            {ProductsData.map((item: ProductType, index) => (
              <ProductCard item={item} index={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#F0EEFB",
    color: "#717372",
  },
  category: {
    borderColor: "#8F00DB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 9,
    borderRadius: 12,
  },
  subcategory_area: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  card_area: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    width: screenWidth - 48,
  },
});
