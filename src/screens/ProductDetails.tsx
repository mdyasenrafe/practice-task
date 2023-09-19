import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import SellerInformation from "../components/ProductDescription/SellerInformation";
import TrendingProducts from "../components/ProductDescription/TrendingProducts";
import RelatedProducts from "../components/ProductDescription/RelatedProducts";
import Description from "../components/ProductDescription/Description";
import CustomText from "../theme/text/CustomText";
import { Feather } from "@expo/vector-icons";
import CarouselImages from "../components/ProductDescription/CarouselImages";
import FeatureCard from "../components/ProductDescription/FeatureCard";

export default function ProductDetails({ navigation, route }: any) {
  const item = route.params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselImages images={item.images} />
        <View style={styles.header_area}>
          <View
            style={{
              paddingHorizontal: 35,
              paddingVertical: 38,
            }}
          >
            <View style={styles.university_name}>
              <View style={styles.university}>
                <CustomText preset="p6" style={{ color: "#8E00DB" }}>
                  Texas University,
                </CustomText>
              </View>
              <Image
                source={require("../../assets/icons/share.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <View>
              <CustomText preset="h5">{item.name}</CustomText>
              <View
                style={[
                  styles.row_view,
                  {
                    justifyContent: "space-between",
                    marginTop: 20,
                  },
                ]}
              >
                <CustomText preset="p1_medium" style={{ color: "#1E1C1A" }}>
                  {item.price}
                  <CustomText preset="p5" style={{ color: "#717372" }}>
                    /Day
                  </CustomText>
                </CustomText>
                <View style={styles.row_view}>
                  <CustomText preset="p3_medium" style={{ color: "#8E00DB" }}>
                    Rent Now
                  </CustomText>
                  <Feather name="plus" size={24} color="#8E00DB" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sub_container}>
          <Description />
          <SellerInformation />
          <TrendingProducts />
          <FeatureCard />
          <RelatedProducts />
        </View>
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
  row_view: {
    flexDirection: "row",
    alignItems: "center",
  },
  university_name: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  university: {
    backgroundColor: "white",
    borderRadius: 33,
    width: 125,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  header_area: {
    backgroundColor: "#F8F7FF",
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#F8F7FF",
    borderLeftColor: "#F8F7FF",
    borderRightColor: "#F8F7FF",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
});
