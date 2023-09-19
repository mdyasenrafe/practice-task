import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { screenWidth } from "../../theme/Theme";
import ImageCard from "./ImageCard";

export default function CarouselImages({ images }: { images: string[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View>
      <Carousel
        autoplay={true}
        autoplayDelay={1000}
        data={images}
        renderItem={({ item, index }: any) => (
          <ImageCard item={item} key={index} />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      ></Carousel>
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDotStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 0,
    margin: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    top: -20,
  },
  dot: {
    width: 30,
    height: 11,
    borderRadius: 50,
    backgroundColor: "#BCBCBC",
    paddingHorizontal: 0,
  },
  inactiveDotStyle: {
    width: 20,
    height: 11,
    borderRadius: 50,
    backgroundColor: "#E2E2E2",
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
});
