import React, { useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useTheme } from "./ThemeContext";
import Home from "../screens/Home";
import { RoomComponent } from "../screens/Room";

import { View, PanResponder, Animated } from "react-native";
function blank() {
  return <View></View>;
}

const Sty = { width: "100%", height: "100%" };
const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
  const state = useTheme();
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log(pan.x._value, pan.y._value);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (e, gestureState) => {
        console.log(pan.x._value, pan.y._value);
        const dx = { dx: pan.x, dy: pan.y };
        return Animated.event([null, dx])(e, gestureState);
      },
      onPanResponderRelease: () => {
        console.log(pan.x._value, pan.y._value);
        pan.flattenOffset();
      },
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
              <Drawer.Screen key={i} name={r.title} component={RoomComponent} />
            ))}
        <Drawer.Screen name="Settings" component={blank} />
        <Drawer.Screen name="Room" component={RoomComponent} />
      </Drawer.Navigator>
    </View>
  );
}
