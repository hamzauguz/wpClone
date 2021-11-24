import React from "react"
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'
import { Feather as Icon } from "@expo/vector-icons";
import {
    GREY_COLOR,
    LIGHT_COLOR,
    SECONDARY_LIGHT,
    PRIMARY
} from "../constants/colors";


const CallCard = ({ item, image, a1, a2, a3 }) => {

    return (
        <View style={styles.row}>
            <TouchableOpacity>

                <Image style={styles.imageUrl} source={{ uri: image }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ left: 10, top: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>{a1}</Text>
                    <View style={styles.row2}>
                        <Icon name="arrow-down-left" size={22} color={"red"} />
                        <Text> {a2},</Text>
                        <Text> {a3}</Text>
                    </View>


                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="phone-outgoing" size={26} color={PRIMARY} style={{ left: 100, top: 4 }} />
            </TouchableOpacity>
        </View>

    )

}
const styles = StyleSheet.create({
    imageUrl: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    row: {
        flexDirection: "row",
        borderTopWidth: 15,
        borderColor: "transparent",




    },
    row2: {
        flexDirection: "row",
        top: 5,

    },
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
    row: {
        flexDirection: "row",
        borderTopWidth: 15,
        borderColor: "transparent",




    },
})
export default CallCard