import { Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { presets, TextPresets } from "./Text.preset";
import { useNavigationContainerRef } from "@react-navigation/native";

interface TextPropsType {
  children: React.ReactNode;
  preset?: TextPresets;
  style?: any;
  color?: string;
}

export default function CustomText(props: TextPropsType) {
  const { children, preset = "default", style } = props;

  const styles = StyleSheet.compose(style, presets[preset] as any);
  return <Text style={styles}>{children}</Text>;
}
