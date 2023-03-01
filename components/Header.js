import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Header({ appName }) {
  //console.log(props)
  const { width, height } = useWindowDimensions();

  const paddingVerticalDynamic = height < 400 ? 0 : 5;
  const marginVerticalDynamic = height < 400 ? 5 : 0;

  return (
    <View>
      <Text
        style={[
          styles.header,
          { padding: paddingVerticalDynamic, margin: marginVerticalDynamic },
        ]}
      >
        Welcome to {appName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderColor: "purple",
    // borderWidth: Platform.OS == "ios" ? 5 : 0,
    borderWidth: Platform.select({android: 4, ios: 2, default: 0}),
    padding: 5,
    margin: 5,
    fontSize: windowWidth > 380 ? 24 : 16,
    color: "purple",
    fontWeight: "bold",
    width: 350,
    maxWidth: "80%",
  },
});
