import React from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import {
    GREY_COLOR,
    LIGHT_COLOR,
    SECONDARY_LIGHT,
    PRIMARY,

} from "../constants/colors";

const insideChats = props => {
    const navigation = useNavigation();

    const h1 = props.route.params.msgyou1
    const photo = props.route.params.photo
    const name = props.route.params.name
    return (
        <View style={{ height: "100%" }}>

            <View style={{ backgroundColor: PRIMARY, height: 95, flexDirection: "row" }}>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon style={{ top: 55, left: 5 }} name="arrow-left" size={26} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                        <Image style={{ height: 40, width: 40, top: 45, borderRadius: 20, left: 15 }} source={{ uri: photo }} />
                        <Text style={{ top: 55, left: 25, fontWeight: "500", fontSize: 20, color: "white" }}>{name}</Text>
                    </TouchableOpacity>

                </View>

                <Image style={{ height: 800, width: "150%", top: 95, right: 300 }} source={{ uri: "https://i.pinimg.com/originals/45/ce/c7/45cec757faf8d07318cc829dcf21c697.jpg" }} />

            </View>
            <View style={{ top: -40, flexDirection: "row", right: -300, height: 30, width: 100 }}>
                <Icon style={{ right: 30 }} name="video" size={26} color={"white"} />
                <Icon style={{ right: 15 }} name="phone-call" size={26} color={"white"} />
                <Icon name="menu" size={26} color={"white"} />



            </View>
            <View style={{ top: 650, height: 40 }}>
                <View style={{ flexDirection: "row", overflow: "hidden", borderRadius: 40, backgroundColor: "white", width: "83%", left: 5 }}>
                    <TouchableOpacity>
                        <Icon name="smile" size={26} color={"gray"} style={{ top: 5, left: 10 }} />
                    </TouchableOpacity>
                    <TextInput placeholder="Message" style={{ backgroundColor: "transparent", height: 40, width: "75%", left: 15, fontSize: 20 }} />
                    <TouchableOpacity>
                        <Icon name="paperclip" size={26} color={"gray"} style={{ top: 5, right: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="camera" size={26} color={"gray"} style={{ top: 5, left: -10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 50, width: 50, backgroundColor: PRIMARY, bottom: 44, left: 335, borderRadius: 25 }}>
                    <Icon name="mic" size={36} color="white" style={{ backgroundColor: PRIMARY, height: 40, width: 40, textAlign: "center", borderRadius: 20, overflow: "hidden", top: 5, left: 5 }} />
                </View>
                <View>

                </View>
            </View>
        </View >
    )
}
export default insideChats