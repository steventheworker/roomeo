import React, { useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useTheme } from "./ThemeContext";
import Home from "../screens/Home";
import { RoomComponent } from "../screens/Room";

import { View, PanResponder } from "react-native";
import { TS, TM, TE } from "../TouchHandlers";
import { isMobile } from "../fn";
function blank() {
  return <View></View>;
}

const Sty = { width: "100%", height: "100%" };
const drawerSty = { backgroundColor: "#121212" };
const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
  const state = useTheme();
  const panResponder = isMobile
    ? { panHandlers: null }
    : useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: (e) => TS(e),
          onPanResponderMove: (e) => TM(e),
          onPanResponderRelease: (e) => TE(e),
        })
      ).current;

  return (
    <View style={Sty} {...panResponder.panHandlers}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={drawerSty}
        drawerContentOptions={{ labelStyle: { color: "#aeaeaf" } }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Direct Messages" component={blank} />
        <Drawer.Screen name="Find Battle" component={blank} />
        {!state.rooms.length
          ? null
          : state.rooms.map((r, i) => (
              <Drawer.Screen
                initialParams={{ roomid: r.id }}
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
