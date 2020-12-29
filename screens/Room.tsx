import React from "react";
import { DrawerProps } from "../types";
import styled from "styled-components/native";
import Chat from "../components/room/Chat";
import { px, getHeight, statusBarHeight, isMobile } from "../fn";
import { Rel } from "../components/Library";

export type RType = {
  id: string;
  title: string;
  userCount: number;
  shortDesc: string;
};
export class Room {
  title: string;
  id: string;
  constructor(r: RType) {
    this.title = r.title;
    this.id = r.id;
  }
}
export interface RoomProps extends DrawerProps {
  room: RType;
}

export const RoomsList: { [id: string]: RType } = {
  main: {
    id: "main",
    title: "Main",
    userCount: 0,
    shortDesc: "ABC 123",
  },
  two: {
    id: "two",
    title: "Two",
    userCount: 0,
    shortDesc: "ABC 123",
  },
  3: {
    id: "3",
    title: "3",
    userCount: 0,
    shortDesc: "ABC 123",
  },
};
const screenHeight: number = getHeight(true) - statusBarHeight;
const RoomContainer = styled.View`
  width: 100%;
  height: ${screenHeight}px;
  background: #888888;
  position: absolute;
  top: ${px(0)};
`;
const RoomTitle = styled.Text`
  text-shadow-offset: 5px 5px;
  text-shadow-radius: 1px;
  text-shadow-color: green;
  color: black;
  font-weight: bold;
  font-size: 33px;
  position: absolute;
  right: ${isMobile ? 0 : 18}px;
`;
export function RoomComponent({ navigation, route }: DrawerProps) {
  console.log(route.params);
  const { roomid } = route.params;
  const room = RoomsList[roomid];
  return (
    <RoomContainer>
      <Rel>
        <RoomTitle>{room.title}</RoomTitle>
        <Chat roomid={room.id} />
      </Rel>
    </RoomContainer>
  );
}
