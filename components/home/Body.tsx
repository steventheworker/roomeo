import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import ChatRoomList from "./ChatroomList";

export default function Body() {
  return (
    <View>
      <Text style={{ color: "white", fontSize: 44 }}>Rooms:</Text>
      <ChatRoomList />
    </View>
  );
}
