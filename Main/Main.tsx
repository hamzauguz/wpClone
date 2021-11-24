import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import { LIGHT_COLOR, PRIMARY, PRIMARY_DARK} from '../constants/colors'
import { Feather as Icon } from "@expo/vector-icons";
import Calls from '../screens/Calls';
import Status from '../screens/Status';
import Chats from '../screens/Chats';
import Camera from '../screens/Camera';
import insideChats from '../screens/insideChats';




const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MaterialTopTab() {
 return (
      
    
  <Tab.Navigator initialRouteName="Home"
  tabBarOptions={{
    indicatorStyle: {
      backgroundColor: "#fff",
      
    },
    tabStyle: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      
    },
    
    activeTintColor: LIGHT_COLOR,
    labelStyle: { fontSize: 16, fontWeight: "bold", },
    style: { backgroundColor: PRIMARY,top:0 },
  }}
  
  
  
  >
      <Tab.Screen
        
        name="camera"
        options={{
            
            
          tabBarLabel: () => (
            <View style={{width:40}}>
              <Icon name="camera" size={26} color={"white"} />
            </View>
          ),
          
        }}
        component={Camera}
      />
      
         <Tab.Screen name="CHATS" component={Chats} />
   <Tab.Screen name="STATUS" component={Status} />
    <Tab.Screen name="CALLS" component={Calls} />
    </Tab.Navigator>
  
  );
}
const Main=()=>{
    return(
        <View style={{ flex: 1 }}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen
            
              options={({ navigation, route }) => ({
                  
                  title:null,
                  
                headerTintColor: LIGHT_COLOR,
                headerStyle: {
                  elevation: 0,
                  backgroundColor: PRIMARY,
                  borderBottomWidth:0
                  
                  
                 
                },
                
                
                headerRight: () => {
                  return (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => console.log("Search")}
                        style={{ marginHorizontal: 15 }}
                      >
                        <Icon name="search" size={26} color={LIGHT_COLOR} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => console.log("menu Clicked")}
                        style={{ marginHorizontal: 5 }}
                      >
                        <Icon
                          name="more-vertical"
                          size={26}
                          color={LIGHT_COLOR}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                },
                headerLeft:()=>{
                    return(
                        <View>
                            <Text style={{fontSize:26,fontWeight:"600",color:"white",left:10}}>WhatsApp</Text>
                            <Text style={{backgroundColor:PRIMARY,width:390,height:10,top:2}}></Text>
                            </View>
                    )
                }
                
              })}
              name="home"
              component={MaterialTopTab}
            />
            <Stack.Screen options={{headerShown:false}} name="insideChats" component={insideChats}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Main