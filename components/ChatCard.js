import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native'
import {
    GREY_COLOR,
    LIGHT_COLOR,
    SECONDARY_LIGHT,
    PRIMARY,

} from "../constants/colors";
import { userList } from "../services/data"
import Modal from "react-native-modal";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core'




const hamza = () => {

    <Modal onBackdropPress={() => { toggleModal() }} isVisible={isModalVisible} style={{ justifyContent: "center", alignItems: "center", height: "100%", width: "120%", right: 30, top: 0, opacity: 0.7 }}>

        <View style={{ backgroundColor: "blue", width: 300, justifyContent: "center", alignItems: "center", height: 300, right: 26 }}>
            <Image style={{ width: "100%", height: "101%", bottom: 10 }} source={{ uri: "https://www.bollywoodhungama.com/wp-content/uploads/2021/04/Aditya-Narayan-back-from-hospital-to-do-another-COVID-19-test-on-April-12-1.jpg" }} />

            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "white", width: "100%", height: 47, top: -10 }}>
                <TouchableOpacity>
                    <Icon name="info" size={30} color={PRIMARY} style={{ left: 165, bottom: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="message-circle" size={30} color={PRIMARY} style={{ left: -110, bottom: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="phone-call" size={30} color={PRIMARY} style={{ left: -65, bottom: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="video" size={30} color={PRIMARY} style={{ bottom: 1, right: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={{ bottom: 360, width: "100%", height: 35, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <Text style={{ top: 5, color: "white", left: 5, fontSize: 18, fontWeight: "600" }}>ANIL</Text>
            </View>

        </View>

    </Modal>
}



const ChatsCard = ({ a3, a1, a2, a4, a5 }) => {
    const navigation = useNavigation()

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isModalVisible, setModalVisible] = useState(false);


    return (
        <View >
            <Modal onBackdropPress={() => { toggleModal() }} isVisible={isModalVisible} style={{ justifyContent: "center", alignItems: "center", height: "100%", width: "120%", right: 30, top: 0, opacity: 0.7 }}>

                <View style={{ backgroundColor: "blue", width: 300, justifyContent: "center", alignItems: "center", height: 300, right: 26 }}>
                    <Image style={{ width: "100%", height: "101%", bottom: 10 }} source={{ uri: "https://www.bollywoodhungama.com/wp-content/uploads/2021/04/Aditya-Narayan-back-from-hospital-to-do-another-COVID-19-test-on-April-12-1.jpg" }} />

                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "white", width: "100%", height: 47, top: -10 }}>
                        <TouchableOpacity>
                            <Icon name="info" size={30} color={PRIMARY} style={{ left: 165, bottom: 1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="message-circle" size={30} color={PRIMARY} style={{ left: -110, bottom: 1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="phone-call" size={30} color={PRIMARY} style={{ left: -65, bottom: 1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="video" size={30} color={PRIMARY} style={{ bottom: 1, right: 5 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ bottom: 360, width: "100%", height: 35, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Text style={{ top: 5, color: "white", left: 5, fontSize: 18, fontWeight: "600" }}>ANIL</Text>
                    </View>

                </View>

            </Modal>

            <FlatList
                style={{ height: "100%", left: 10 }}
                data={userList}
                renderItem={({ item, index }) => {

                    return <View key={index}>

                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => { toggleModal() }}>
                                <Image style={styles.imageUrl} source={{ uri: item.profilePic }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("insideChats", {
                                    msgyou1: item.msgyou1,
                                    msgyou2: item.msgyou2,
                                    msgme1: item.msgme1,
                                    msgme2: item.msgme2,
                                    photo: item.profilePic,
                                    name: item.name

                                })
                            }}>
                                <View style={{ left: 10, top: 5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
                                    <View style={styles.row2}>
                                        <Text> {item.datecall},</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ justifyContent: "center", left: 110 }}>
                                <Text style={styles.notifi}>{item.notifi}</Text>
                                <Text style={{ left: 60, top: 4, color: SECONDARY_LIGHT }}> {item.lastSeen}</Text>
                            </View>
                        </View>
                    </View>


                }}

            />
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
    notifi: {
        right: -100,
        top: 1,
        backgroundColor: SECONDARY_LIGHT,
        height: 20,
        width: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: "center",
        color: "white",
        fontWeight: "500"
    }
})

export default ChatsCard