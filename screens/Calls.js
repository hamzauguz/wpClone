import React from "react";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";
import { userList } from "../services/data"
import { Feather as Icon } from "@expo/vector-icons";
import { SECONDARY_LIGHT } from "../constants/colors";
import CallCard from "../components/CallCard";

const Calls = () => {
    return (
        <SafeAreaView >
            <FlatList
                style={{ height: "100%", left: 10 }}
                data={userList}
                renderItem={({ item, index }) => {
                    return <View key={index}>
                        <CallCard
                            image={item.profilePic}
                            a1={item.name}
                            a2={item.datecall}
                            a3={item.lastSeen}
                        />
                    </View>
                }}
            />
            <View style={styles.floatingActionContainer}>
                <View style={styles.camera}>
                    <Icon name="phone-call" size={26} color={"white"} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    floatingActionContainer: {
        position: "absolute",
        bottom: 15,
        right: 15,
        alignItems: "center",
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
})

export default Calls