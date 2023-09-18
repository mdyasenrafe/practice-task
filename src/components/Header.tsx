import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomText from "../theme/text/CustomText";
import { screenWidth } from "../theme/Theme";

export default function Header() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View
      style={[
        styles.header_area,
        {
          paddingTop: statusBarHeight,
        },
      ]}
    >
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.avatar}
      />
      <View>
        <CustomText preset="p1_medium" style={styles.title}>
          Jason Smith
        </CustomText>
        <CustomText preset="p5" style={styles.description}>
          Southern Methodist University
        </CustomText>
      </View>
      {/* three bar icon */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={require("../../assets/icons/notification.png")}
          style={styles.notification_icon}
        />
        <Image
          source={require("../../assets/icons/menu.png")}
          style={styles.menu_icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_area: {
    flexDirection: "row",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  avatar: {
    width: 54,
    height: 54,
    marginRight: 14,
  },
  title: {
    color: "#1E1C1A",
  },
  description: {
    color: "#717372",
  },
  notification_icon: {
    width: 21,
    height: 23,
    marginRight: 24,
  },
  menu_icon: {
    width: 22,
    height: 15,
  },
});
