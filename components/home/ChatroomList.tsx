import React from "react";
import styled from "styled-components/native";
import { Button, Text, View } from "react-native";
import { Room, RoomsList, RoomProps } from "../../screens/Room";
import { useTheme, useThemeUpdate } from "../ThemeContext";
import { DrawerProps } from "../../types";

const RoomStyling = styled.TouchableOpacity`
  background: #e6e6e6;
  border: 16px solid white;
  padding: 5px;
  margin: 5px;
`;
const UserCount = styled.Text`
  position: absolute;
  bottom: 0;
  font-size: 20px;
  right: 0;
  font-family: Courier;
  color: silver;
`;
function RoomListing({ room, navigation, route }: RoomProps) {
  const state = useTheme();
  const setState = useThemeUpdate();
  function AddRoom(roomid: string) {
    const rooms = state.rooms;
    const res = rooms.filter((r) => r.id === roomid);
    res.length ? null : rooms.push(new Room(RoomsList[roomid]));
    setState({ ...state, rooms, room: roomid });
    navigation.navigate("Room", { roomid });
  }
  return (
    <RoomStyling
      onPress={() => {
        AddRoom(room.id);
      }}
    >
      <UserCount>({room.userCount} users)</UserCount>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 33, color: "#a6a6a6" }}>{room.title} - </Text>
        <Text style={{ fontSize: 12, color: "#a6a6a6" }}>{room.shortDesc}</Text>
      </View>
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
      <Button title="Create new chatroom" onPress={() => {}} />
    </View>
  );
}
