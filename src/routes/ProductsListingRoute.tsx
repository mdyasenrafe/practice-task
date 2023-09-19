import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductListingScreens from "../screens/ProductListingScreens";
import { screenWidth } from "../theme/Theme";

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

const Screen3 = () => {
  return <View style={styles.screen3} />;
};

const Screen4 = () => {
  return <View style={styles.screen4} />;
};

export default function ProductsListingRoute() {
  const _renderIcon = (routeName: any) => {
    let icon: any = "";

    switch (routeName) {
      case "ProductListing":
        icon = "ios-home-outline";
        break;
      case "Messages":
        icon = "chatbox-ellipses-outline";
        break;
      case "Search":
        icon = "search-outline";
        break;
    }

    return routeName === "backpack" ? (
      <MaterialIcons name="backpack" size={24} color="white" />
    ) : (
      <Ionicons name={icon} size={24} color="white" />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="UP"
      shadowStyle={styles.shawdow}
      screenOptions={{
        headerShown: false,
      }}
      height={80}
      circleWidth={50}
      width={screenWidth}
      bgColor="#8F00DB"
      initialRouteName="ProductListing"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View>
          <Image
            source={require("../../assets/icons/add.png")}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
          />
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="ProductListing"
        position="LEFT"
        component={() => <ProductListingScreens />}
      />
      <CurvedBottomBar.Screen
        name="backpack"
        component={() => <Screen2 />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Messages"
        component={() => <Screen3 />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Search"
        component={() => <Screen4 />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  btnCircleUp: {
    width: 40,
    height: 40,
    borderRadius: 30,
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
  screen3: {
    flex: 1,
    backgroundColor: "#FFDEAD",
  },
  screen4: {
    flex: 1,

    backgroundColor: "#FFDAB9",
  },
});
