import React from "react";
import { View, Text, Button } from "react-native";
import { DrawerProps } from "../types";

export type RType = {
  roomid: string;
  title: string;
  userCount: number;
  shortDesc: string;
};
export class Room {
  title: string;
  roomid: string;
  constructor(r: RType) {
    this.title = r.title;
    this.roomid = r.roomid;
  }
}
export interface RoomProps extends DrawerProps {
  room: RType;
}

export const RoomsList: { [roomid: string]: RType } = {
  main: {
    roomid: "main",
    title: "Main",
    userCount: 0,
    shortDesc: "ABC 123",
  },
  two: {
    roomid: "two",
    title: "Two",
    userCount: 0,
    shortDesc: "ABC 123",
  },
  3: {
    roomid: "3",
    title: "3",
    userCount: 0,
    shortDesc: "ABC 123",
  },
};

export function RoomComponent({ navigation, route }: DrawerProps) {
  console.log(route.params);
  const { roomid } = route.params;
  const room = RoomsList[roomid];
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={{ color: "red" }}>{room.title}</Text>
      <Button title="abc" onPress={() => {}} />
    </View>
  );
}
