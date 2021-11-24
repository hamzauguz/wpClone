import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableHighlight, Button, TouchableOpacity, Image } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import Modal from "react-native-modal";
import {
    GREY_COLOR,
    LIGHT_COLOR,
    SECONDARY_LIGHT,
    PRIMARY,

} from "../constants/colors";


const Camera = () => {
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isModalVisible, setModalVisible] = useState(false);

    function hamza() {
        <View >
            <Button title="Show modal" onPress={toggleModal} />

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
        </View>
    }


    return (

        <View >
            <Button title="Show modal" onPress={toggleModal} />

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
        </View>
    );
}




export default Camera