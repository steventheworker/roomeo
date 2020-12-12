import React from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";
import { px } from "../fn";
import { DrawerProps } from "../types";
import ChatRoomList from "../components/home/ChatroomList";

const BodyContainer = styled.View`
  position: absolute;
  top: ${px(0)};
  height: 100%;
  width: 100%;
  background: black;
`;
export default function Home({ navigation, route }: DrawerProps) {
  return (
    <BodyContainer>
      <Text style={{ color: "white", fontSize: 44 }}>
        Rooms: <Text style={{ fontSize: 12 }}>Mute & Change Name</Text>
      </Text>
      <ChatRoomList navigation={navigation} route={route} />
      <Button title="ChatRooms" onPress={() => {}} />
      <Button title="Friends" onPress={() => {}} />
      <Button title="Search" onPress={() => {}} />
    </BodyContainer>
  );
}
