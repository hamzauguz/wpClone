import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
    GREY_COLOR,
    LIGHT_COLOR,
    PRIMARY,
    SECONDARY_LIGHT,
} from "../constants/colors";
import { Feather as Icon, Entypo } from "@expo/vector-icons";
import ProfileCard from "../components/ProfileCard";


const Status = () => {
    return (
        <View style={styles.rootStatus}>
            <ProfileCard
                image={"https://pbs.twimg.com/profile_images/378800000593757483/3e0cb9e766acb4e4acb33c0f8db7eee5_400x400.jpeg"}
                create={true}
                title="My Status"
                subTitle="Tap to add status update"
            />
            <View style={styles.section}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text>Recent Updates</Text>
                </View>
            </View>
            <ProfileCard image={"https://cdn.karar.com/news/26630.jpg"} create={false} title="John Doe" subTitle="Today, 6:40 PM" />
            <View style={styles.floatingActionContainer}>
                <View style={styles.create}>
                    <Entypo name="edit" size={20} color={PRIMARY} />
                </View>
                <View style={styles.camera}>
                    <Entypo name="camera" size={26} color={LIGHT_COLOR} />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    rootStatus: {
        flex: 1,
        backgroundColor: "transparent",
    },

    section: {
        backgroundColor: GREY_COLOR,
        height: 30,
        justifyContent: "center",
    },
    floatingActionContainer: {
        position: "absolute",
        bottom: 10,
        right: 15,
        alignItems: "center",
    },
    create: {
        backgroundColor: GREY_COLOR,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    camera: {
        marginVertical: 10,
        backgroundColor: SECONDARY_LIGHT,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
});
export default Status;
