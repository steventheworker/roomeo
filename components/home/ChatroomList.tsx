import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Room, RoomsList, RoomProps } from "../../screens/Room";
import { useTheme, useThemeUpdate } from "../ThemeContext";
import { DrawerProps } from "../../types";

const RoomStyling = styled.TouchableOpacity`
  background: #e6e6e6;
  border: 16px solid white;
  padding: 5px;
  margin: 5px;
`;
function RoomListing({ room, navigation, route }: RoomProps) {
  const state = useTheme();
  const setState = useThemeUpdate();
  function AddRoom(roomid: string) {
    const rooms = state.rooms;
    const res = rooms.filter((r) => r.roomid === roomid);
    res.length ? null : rooms.push(new Room(RoomsList[roomid]));
    setState({ ...state, rooms, room: roomid });
    navigation.navigate("Room", { roomid });
  }
  return (
    <RoomStyling
      onPress={() => {
        AddRoom(room.roomid);
      }}
    >
      <Text style={{ fontSize: 33, color: "#a6a6a6" }}>{room.title}</Text>
    </RoomStyling>
  );
}
export default function ChatRoomList({ navigation, route }: DrawerProps) {
  return (
    <View>
      {Object.keys(RoomsList).map((roomKey, i) => (
        <RoomListing
          route={route}
          navigation={navigation}
          key={i}
          room={RoomsList[roomKey]}
        />
      ))}
    </View>
  );
}
