import React from "react";
import { SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";



import Home from "../Pages/Home";
import Git from "../Pages/Git";


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}>
            </Stack.Screen>


            <Stack.Screen
            name="Git"
            component={Git}
            options={{
                headerStyle:{
                    backgroundColor: 'transparent',
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    opacity: 0.3,
                },
             
                headerTransparent: true,
                headerTintColor: 'black',
                 headerTitle: 'Back',
                headerShown: true,
                headerTitleStyle:{
                    fontFamily: 'NanumGothic-ExtraBold',
                    fontSize: 20,
                    color: 'white',
                    
                    
                },
            }}>
            </Stack.Screen>

        </Stack.Navigator>
    )
}