import React, { useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useTheme } from "./ThemeContext";
import Home from "../screens/Home";
import { RoomComponent } from "../screens/Room";

import { View, PanResponder } from "react-native";
import { TS, TM, TE } from "../TouchHandlers";
function blank() {
  return <View></View>;
}

const Sty = { width: "100%", height: "100%" };
const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
  const state = useTheme();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => TS(e),
      onPanResponderMove: (e) => TM(e),
      onPanResponderRelease: (e) => TE(e),
    })
  ).current;

  return (
    <View style={Sty} {...panResponder.panHandlers}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Find Battle" component={blank} />
        {!state.rooms.length
          ? null
          : state.rooms.map((r, i) => (
              <Drawer.Screen
                initialParams={{ roomid: r.roomid }}
                key={i}
                name={r.title}
                component={RoomComponent}
              />
            ))}
        <Drawer.Screen name="Settings" component={blank} />
        <Drawer.Screen name="Room" component={RoomComponent} />
      </Drawer.Navigator>
    </View>
  );
}
