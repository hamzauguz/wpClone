import React, { ReactComponentElement, ReactNode } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { SECONDARY_LIGHT } from "../constants/colors";





const FloatingButton = ({ iconName, iconSize }) => {
  return (
    <View>
      <View style={styles.floatingContainer}>
        <View style={styles.iconBox}>
          <Icon name={iconName} size={30} color={"#ffffff"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    backgroundColor: SECONDARY_LIGHT,
    width: 70,
    height: 70,
    borderRadius: 35,
    position: "absolute",
    right: 10,
    bottom: 20,
  },
  iconBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});


export default FloatingButton;
