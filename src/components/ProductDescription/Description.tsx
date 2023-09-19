import { Image, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../theme/text/CustomText";

const MeetUpData = [
  {
    name: "Buyer Will Pick",
    color: "#93D12A",
  },
  {
    name: "Public Place",
    color: "#93D12A",
  },
  {
    name: "Seller will Drop",
    color: "#F75864",
  },
];

export default function Description() {
  return (
    <View style={styles.container}>
      <CustomText preset="p2_medium" style={{ color: "#1E1C1A" }}>
        Description
      </CustomText>
      <CustomText preset="p4" style={{ color: "#4D4D5B", marginTop: 10 }}>
        Used only around 5 to 6 times & I purchased it for my online classes but
        now I am not taking them so I want to sold them out.
      </CustomText>
      <CustomText preset="p4" style={{ color: "#1E1C1A", marginTop: 16 }}>
        Seller's Meetup Preference
      </CustomText>
      <View style={styles.meet_up_area}>
        {MeetUpData.map((item, index) => {
          return (
            <View key={index} style={styles.meet_up_item}>
              <View
                style={[
                  styles.meet_up_circle,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              />
              <CustomText
                preset="p6"
                style={{ color: "#808080", marginLeft: 6 }}
              >
                {item.name}
              </CustomText>
            </View>
          );
        })}
      </View>
      <View style={styles.size_area}>
        <View style={styles.size_box}>
          <CustomText preset="p3_medium">Size</CustomText>
          <CustomText preset="p6" style={{ color: "#7F7F7F" }}>
            M (Medium)
          </CustomText>
        </View>
        <View style={styles.size_box}>
          <CustomText preset="p3_medium">Condition </CustomText>

          <CustomText preset="p6" style={{ color: "#7F7F7F" }}>
            <Image
              source={require("../../../assets/icons/thumbs-up.png")}
              style={{
                width: 18,
                height: 18,
              }}
            />
            Good
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  meet_up_area: {
    marginTop: 11,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  meet_up_item: {
    flexDirection: "row",
    marginTop: 11,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EBE9F4",
    marginLeft: 9,
    paddingVertical: 9,
    paddingHorizontal: 6,
    borderRadius: 30,
  },
  meet_up_circle: {
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  size_area: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  size_box: {
    borderWidth: 1,
    borderColor: "#EBE9F4",
    marginRight: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
});
