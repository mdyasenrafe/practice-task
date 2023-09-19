import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../theme/text/CustomText";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ProductsData } from "../Datas/ProductsData";
import { screenWidth } from "../theme/Theme";

export default function TrendingProducts() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText preset="p2_medium" style={{ color: "#1E1C1A" }}>
          Trending Products
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
        {ProductsData.map((item: any, index) => {
          const [love, setLove] = useState(false);
          return (
            <TouchableOpacity style={styles.card}>
              <View>
                <ImageBackground
                  source={item.photo}
                  style={styles.image_background}
                  imageStyle={{
                    borderRadius: 10,
                    width: "auto",
                  }}
                >
                  <View style={{ padding: 14 }}>
                    <TouchableOpacity
                      style={[
                        styles.love_icon_area,
                        {
                          backgroundColor: love ? "#8F00DB" : "white",
                        },
                      ]}
                      onPress={() => setLove(!love)}
                    >
                      <Ionicons
                        name={love ? "heart" : "heart-outline"}
                        size={10}
                        color={love ? "white" : "black"}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View style={styles.card_body}>
                  <CustomText preset="p5_medium">{item.name}</CustomText>
                  <View style={styles.card_footer}>
                    <CustomText preset="p5_medium" style={{ color: "#8E00DB" }}>
                      {item.price}
                    </CustomText>
                    <TouchableOpacity style={styles.btn}>
                      <CustomText preset="p5_medium">Buy Now</CustomText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
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
  image_background: {
    width: "100%",
    height: screenWidth / 2 - 30,
  },
  love_icon_area: {
    width: 20,
    height: 20,
    borderRadius: 23,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#CFC9DF",
    borderRadius: 10,
    width: screenWidth / 2 - 30,
  },
  card_body: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: "100%",
  },
  card_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  btn: {
    width: 68,
    height: 30,
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
