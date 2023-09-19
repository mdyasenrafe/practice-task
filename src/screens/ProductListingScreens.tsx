import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import CustomText from "../theme/text/CustomText";
import { CategoriesData, SubCategoriesData } from "../Datas/CategoriesData";
import { ProductsData } from "../Datas/ProductsData";
import { screenWidth } from "../theme/Theme";
import ProductCard from "../components/ProductCard";
import { BrandDatas } from "../Datas/BrandsData";

export default function ProductListingScreens() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState<string>();
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
          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoriesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item.name)}
                style={[
                  styles.category,
                  {
                    backgroundColor: item.color,
                    borderWidth: selectedCategory === item.name ? 1.5 : 0,
                  },
                ]}
              >
                <CustomText
                  preset="p4_medium"
                  style={{
                    color:
                      selectedCategory === item.name ? "#8F00DB" : "#3C3C3C",
                  }}
                >
                  {item.name}
                </CustomText>
              </TouchableOpacity>
            )}
          />
          <View style={styles.subcategory_area}>
            {SubCategoriesData.map((subcategory, index) => (
              <TouchableOpacity
                key={index}
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
              <ProductCard item={item} index={index} key={index} />
            ))}
          </View>

          <View>
            <CustomText
              preset="p2_medium"
              style={{
                marginTop: 46,
              }}
            >
              Shop By Brands
            </CustomText>
            {/* double row multiple slide */}

            <Animated.FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ alignSelf: "flex-start" }}
              numColumns={Math.ceil(BrandDatas.length / 2)}
              data={BrandDatas as BrandType[]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.brand,
                    {
                      borderColor:
                        selectedBrand === item.name ? "#8F00DB" : "#CFC9DF",
                    },
                  ]}
                  onPress={() => setSelectedBrand(item.name)}
                >
                  <Image
                    source={item.photo as any}
                    style={styles.brand_image}
                  />
                  <CustomText>{item.name}</CustomText>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <CustomText
              preset="p2_medium"
              style={{
                marginTop: 46,
              }}
            >
              Similar Product
            </CustomText>
            <ScrollView style={{ marginTop: 27 }} horizontal>
              {ProductsData.map((item: ProductType, index) => (
                <ProductCard item={item} index={index} key={index} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={{ height: 100 }} />
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
    marginTop: 13,
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
  brand: {
    borderWidth: 1,
    paddingVertical: 22,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 18,
    height: 150,
    marginTop: 12,
  },
  brand_image: {
    // dynamic width and height
    width: (screenWidth - 48) / 3 - 48,
    height: (screenWidth - 48) / 3 - 48,
    resizeMode: "contain",
  },
});
