import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import CustomText from "../../theme/text/CustomText";
import { Typography } from "../../theme/Typography";

const FeaturesData = [
  {
    background: "#CF8CF9",
    title1: "Explore 1000+",
    title2: "Products On Rent",
    description: "Buy Or Rent Products ",
    description2: "Free Shipping Month",
  },
  {
    background: "#73EAF8",
    title1: "Explore 2000+",
    title2: "Products On Rent",
    description: "Buy Or Rent Products ",
    description2: "Free Shipping Month",
  },
];

export default function FeatureCard() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 40,
      }}
    >
      {FeaturesData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.feature_item,
            {
              backgroundColor: item.background,
            },
          ]}
        >
          <ImageBackground
            source={require("../../../assets/shape.png")}
            imageStyle={{
              resizeMode: "contain",
            }}
          >
            <View
              style={{
                paddingHorizontal: 36,
                paddingVertical: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  color: "#1E1C1A",
                  fontFamily: Typography.regular,
                  fontSize: 28,
                }}
              >
                {item.title1}
              </Text>
              <Text
                style={{
                  width: "80%",
                  fontWeight: "800",
                  fontFamily: Typography.bold,
                  fontSize: 24,
                }}
              >
                {item.title2}
              </Text>
              <Text
                style={{
                  fontFamily: Typography.regular,
                  fontSize: 16,
                }}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  fontFamily: Typography.regular,
                  fontSize: 16,
                }}
              >
                {item.description2}
              </Text>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  feature_item: {
    borderRadius: 20,
    marginRight: 20,
  },
});
