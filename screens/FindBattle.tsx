import React from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";
import { px } from "../fn";
import { DrawerProps } from "../types";
import ChatRoomList from "../components/home/ChatroomList";
import { useTheme } from "../components/ThemeContext";

const BodyContainer = styled.View`
  position: absolute;
  top: ${px(0)};
  height: 100%;
  width: 100%;
  background: black;
`;
function FindForm() {
  return (
    <>
      <Text>Options:</Text>
      <Button onPress={() => {}} title="Ayy" />
    </>
  );
}

export default function FindBattle({ navigation, route }: DrawerProps) {
  const state = useTheme();
  return (
    <BodyContainer>
      <Text style={{ color: "white", fontSize: 44 }}>
        Find Battle: <Text style={{ fontSize: 22 }}>{state.room}</Text>
      </Text>
      {state.room ? (
        <FindForm />
      ) : (
        <>
          <Text>You should probably join a room first.</Text>
          <ChatRoomList navigation={navigation} route={route} />
        </>
      )}
    </BodyContainer>
  );
}
