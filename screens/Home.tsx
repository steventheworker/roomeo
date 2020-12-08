import React from 'react';
import styled from 'styled-components/native';
import Body from '../components/home/Body';
import {px} from '../fn';

const BodyContainer = styled.View`
    position: absolute;
    top: ${px(0)};
    height: 100%;
    width: 100%;
    background: black;
`;
export default function Home() {
  return (
      <BodyContainer>
          <Body />
      </BodyContainer>
  );
}
