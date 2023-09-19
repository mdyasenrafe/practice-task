import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../theme/text/CustomText";
import { screenWidth } from "../theme/Theme";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export default function ProductCard({ item, index }: any) {
  const [love, setLove] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      key={index}
      style={{
        marginRight: 5,
      }}
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <ImageBackground
        source={item.photo}
        style={styles.image_background}
        imageStyle={{
          borderRadius: 10,
          width: "auto",
        }}
      >
        <View style={styles.card}>
          {/* up part */}
          <View
            style={[
              styles.row_view,
              {
                width: "95%",
              },
            ]}
          >
            <CustomText
              preset="p5_medium"
              style={{ color: "white", width: "90%" }}
            >
              {item.name}
            </CustomText>
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
                size={12}
                color={love ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
          {/* down part */}
          <View style={styles.row_view}>
            <View style={styles.status_area}>
              <Image
                source={require("../../assets/icons/tick.png")}
                style={{
                  width: 13,
                  height: 13,
                }}
              />

              <CustomText
                preset="p5_medium"
                style={{ color: "white", marginLeft: 4 }}
              >
                {item.status}
              </CustomText>
            </View>
            <View style={styles.price_area}>
              <CustomText preset="p5_medium" style={styles.price_text}>
                {item.price}
              </CustomText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image_background: {
    width: screenWidth / 2 - 30,
    height: 252,
    marginBottom: 14,
  },
  card: {
    flex: 1,
    padding: 14,
    justifyContent: "space-between",
  },
  love_icon_area: {
    width: 26,
    height: 26,
    borderRadius: 23,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  row_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status_area: {
    height: 22,
    backgroundColor: "#62B63B",
    paddingHorizontal: 6,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  price_area: {
    height: 22,
    backgroundColor: "#DCD7FF",
    paddingHorizontal: 6,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  price_text: {
    color: "#8F00DB",
  },
});
