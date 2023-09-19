import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../theme/text/CustomText";
import { sellerFeaturesData } from "../../Datas/SellerFeatureData";
import { LinearGradient } from "expo-linear-gradient";

export default function SellerInformation() {
  return (
    <View style={styles.container}>
      <CustomText preset="p2_medium" style={{ colors: "#1E1C1A" }}>
        Seller Information
      </CustomText>
      <View style={styles.image_area}>
        <Image
          source={require("../../../assets/seller.png")}
          style={styles.seller_img}
        />
        <View>
          <CustomText preset="p3_medium">Jennifer Adams</CustomText>
          <CustomText preset="p5" style={{ color: "#717372" }}>
            Texas University
          </CustomText>
          <View style={styles.clap_area}>
            <Image
              source={require("../../assets/icons/clap.png")}
              style={styles.clap_img}
            />
            <CustomText preset="p6">
              “bravo, the seller is from your college”
            </CustomText>
          </View>
        </View>
      </View>
      <CustomText preset="p4" style={{ color: "#4D4D5B" }}>
        Used only around 5 to 6 times & I purchased it for my online classes but
        now I am not taking them so I want to sold them out.
      </CustomText>
      <View style={styles.features_area}>
        {sellerFeaturesData.map((item: string, index) => {
          return (
            <View key={index} style={styles.features_item}>
              <CustomText preset="p5_medium" style={{ color: "#4D4D5B" }}>
                {item}
              </CustomText>
            </View>
          );
        })}
      </View>
      <View style={styles.meet_up_area}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <LinearGradient
              colors={["#F75864", "#FFAF5E"]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.deal_linear}
            >
              <CustomText preset="p3_medium" style={styles.deal_text}>
                Deal{" "}
              </CustomText>
            </LinearGradient>
            <CustomText preset="p3_medium" style={{ color: "#1E1C1A" }}>
              Before
            </CustomText>
          </View>
          <CustomText preset="p3_medium" style={{ color: "#1E1C1A" }}>
            Its Sold Out!
          </CustomText>
          <View></View>
        </View>
        <LinearGradient
          style={styles.meet_up_btn_linear}
          colors={["#F75864", "#FFAF5E"]}
          start={[0, 0]}
          end={[1, 1]}
        >
          <TouchableOpacity style={styles.meet_up_btn}>
            <CustomText preset="p3_medium" style={{ color: "#8E00DB" }}>
              Request Meetup
            </CustomText>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CFC9DF",
    borderRadius: 18,
    paddingVertical: 33,
    paddingHorizontal: 24,
    marginTop: 40,
  },
  image_area: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 24,
  },
  seller_img: {
    width: 76,
    height: 85,
    marginRight: 16,
  },
  clap_area: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  clap_img: {
    width: 18,
    height: 18,
  },
  features_area: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    flexWrap: "wrap",
  },
  features_item: {
    backgroundColor: "#F8F7FF",
    borderWidth: 0.5,
    borderColor: "#fff",
    marginBottom: 7,
    marginRight: 5,
    padding: 8,
    borderRadius: 100,
  },
  meet_up_area: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 33,
  },
  deal_linear: {
    paddingBottom: 2,
    height: 24,
  },
  meet_up_btn_linear: {
    padding: 2,
    borderRadius: 100,
  },
  meet_up_btn: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  deal_text: {
    color: "#8E00DB",
    backgroundColor: "#fff",
  },
});
