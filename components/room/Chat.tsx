import React, { MutableRefObject, useEffect } from "react";
import styled from "styled-components/native";
import { Keyboard, View, Text, Button } from "react-native";
import { isMobile, getHeight, statusBarHeight } from "../../fn";
import { Rel, HR } from "../Library";
import { useState } from "react";
import { useRef } from "react";
import { ChatLogs } from "./ChatUtils";
const ChatContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
const Input = styled.TextInput`
  border: 1px solid black;
  ${isMobile
    ? ""
    : `
    outline-width: 0;
  box-sizing: border-box;
  `}
  font-size: 18px;
  padding: 5px;
  margin: 5px;
`;
const InputContainer = styled.View<InputContainerProps>`
  width: 100%;
  height: 52px;
  background: white;
  opacity: 0.5;
  ${(props) =>
    props.keyboardHeight === "100%"
      ? ""
      : `
    margin-top: -${props.inputHeight}px;
  `}
`;
const ChatLogContainer = styled.View`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
const ChatLogsContainer = styled.ScrollView`
  background: rgba(255, 255, 255, 0.5);
  max-height: 100%;
  width: 100%%;
  flex: 1;
`;
const MessageUser = styled.Text`
  font-weight: bold;
`;

interface KeyboardEvent {
  endCoordinates: { width: number; height: number };
}
interface InputContainerProps {
  keyboardHeight: string;
  inputHeight: number;
}
export default function Chat({ roomid }: { roomid: string }) {
  const $InputContainer = useRef<View | null>(null);
  const inputHeight = useRef<number>(0);
  const [keyboardHeight, setKeyboardHeight] = useState("100%");
  function _keyboardDidShow(e: KeyboardEvent) {
    console.log("showKeyboard=>inputHeight.current:", inputHeight.current);
    const fullHeight = getHeight(true) - inputHeight.current;
    const keyboardHeight = e.endCoordinates.height;
    const shortHeight = fullHeight - keyboardHeight;
    setKeyboardHeight((shortHeight / fullHeight) * 100 + "%");
  }
  function _keyboardDidHide() {
    setKeyboardHeight("100%");
  }
  function updateHeight() {
    const asDiv = ($InputContainer as MutableRefObject<HTMLElement | null>)
      .current;
    inputHeight.current = (asDiv && asDiv.offsetHeight) || 0;
    console.log("InputHeight.current:\t", inputHeight.current);
    console.log("asDiv.offsetHeight::\t", asDiv && asDiv.offsetHeight);
  }
  useEffect(() => {
    updateHeight();
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  });
  return (
    <ChatContainer>
      <Rel style={{ flexDirection: "column" }}>
        <ChatLogsContainer style={{ maxHeight: keyboardHeight }}>
          {ChatLogs.map((log, i) => (
            <ChatLogContainer key={i}>
              <Text>
                <MessageUser style={{ color: "red" }}>
                  {log.user + ": "}
                </MessageUser>
                {log.message}
              </Text>
              <HR color="grey" style={{ marginTop: 5 }} />
            </ChatLogContainer>
          ))}
        </ChatLogsContainer>
        <InputContainer
          inputHeight={inputHeight.current || 0}
          keyboardHeight={keyboardHeight}
        >
          <View
            style={{ position: "relative", width: "100%", height: "100%" }}
            ref={$InputContainer}
          >
            <HR />
            <Input placeholder={"Message #" + roomid} />
            <HR />
          </View>
        </InputContainer>
      </Rel>
    </ChatContainer>
  );
}
