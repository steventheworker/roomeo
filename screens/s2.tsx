import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import MainMenu from '../components/MainMenu';
import {px} from '../fn';

const Body = styled.View`
    position: absolute;
    top: ${px(67)};
    height: 100%;
    width: 100%;
    background: black;
`;
export default function s2() {
  return (
      <Body>
          <Text>Home, s2</Text>
          <Text style={{color:"red"}}>S22</Text>
      </Body>
  );
}
