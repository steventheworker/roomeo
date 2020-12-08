import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

function StyledButton(props: any) {
    return (
        <ChangeNameButton>
            <Text style={{fontSize: 12}}>{props.label}</Text>
        </ChangeNameButton>
    );
}
const ChangeNameButton = (styled.TouchableOpacity)`
    position: absolute;
    right: 5px;
    top: 7px;
    background: silver;
    width: 120px;
    padding: 5px;
`;
export default function ChangeName() {
  return (
      <StyledButton label="Choose Name" />
  );
}
