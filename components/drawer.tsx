import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import s1 from "../screens/s1";
import s2 from "../screens/s2";

import { useTheme } from "../ThemeContext";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const val = useTheme();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="s1" component={s1} />
      {!val ? null : <Drawer.Screen name="s2" component={s2} />}
    </Drawer.Navigator>
  );
  /*
    find battle, customize (builder)
    batles, rooms
    settings gear
  */
}
