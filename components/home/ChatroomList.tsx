import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text, View } from "react-native";

import { useTheme, useThemeUpdate } from "../../ThemeContext";
const RoomStyling = styled.TouchableOpacity`
  background: #e6e6e6;
  border: 16px solid white;
  padding: 5px;
  margin: 5px;
`;
function RoomListing(props: { title: string }) {
  const toggle2 = useThemeUpdate();
  const val = useTheme();
  function pressHandler() {
    toggle2();
    console.log(val);
  }
  return (
    <RoomStyling onPress={pressHandler}>
      <Text style={{ fontSize: 33, color: "#a6a6a6" }}>{props.title}</Text>
    </RoomStyling>
  );
}
export default function ChatRoomList() {
  const Rooms = ["main", "two", "3"];
  return (
    <View>
      {Rooms.map((r, i) => (
        <RoomListing key={i} title={r} />
      ))}
    </View>
  );
}
