import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import { Feather as Icon, Entypo } from "@expo/vector-icons";
import { LIGHT_COLOR, SECONDARY_LIGHT } from "../constants/colors";



const ProfileCard = ({ title, subTitle, create,image }) => {
  return (
    <View style={styles.profileCardContainer}>
      <View style={styles.avatar}>
        <Image style={styles.avatar} source={{uri:image}}/>
        {create ? (
          <View style={styles.plusContainer}>
            <Icon name="plus" size={20} color={LIGHT_COLOR} />
          </View>
        ) : null}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.silent}>{subTitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileCardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "grey",
  },
  plusContainer: {
    backgroundColor: SECONDARY_LIGHT,
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 16,
  },
  silent: {
    color: "grey",
  },
});

export default ProfileCard;
