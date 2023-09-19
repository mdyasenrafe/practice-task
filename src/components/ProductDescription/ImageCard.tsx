import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { screenWidth } from "../../theme/Theme";
import { Ionicons } from "@expo/vector-icons";

export default function ImageCard({ item }: { item: any }) {
  const [love, setLove] = useState(false);
  return (
    <View>
      <Image
        source={item}
        style={{
          width: screenWidth,
          height: 500,
          resizeMode: "cover",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 16,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 30,
          right: 20,
        }}
      >
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
            size={20}
            color={love ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  love_icon_area: {
    width: 40,
    height: 40,
    borderRadius: 23,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
