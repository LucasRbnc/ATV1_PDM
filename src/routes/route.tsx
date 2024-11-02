import React from "react";
import MegaSena from "../pages/megasena";
import Quina from "../pages/quina";
import TimeMania from "../pages/timemania";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator initialRouteName="MegaSena">
            <Drawer.Screen name="MenaSena" component={MegaSena}/>
            <Drawer.Screen name="Quina" component={Quina}/>
            <Drawer.Screen name="TimeMania" component={TimeMania}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;