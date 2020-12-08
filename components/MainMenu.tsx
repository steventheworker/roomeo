import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import {px} from '../fn';


function StyledButton(props: any) {
    return (
        <Btn>
            <Text style={{fontSize: 8}}>{props.label}</Text>
        </Btn>
    );
}
const Btn = (styled.TouchableOpacity)`
    background: silver;
    width: 48%;
    height: 25%;
    margin: 1%;
    margin-bottom: 0;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;



export default function Routing() {
  return (
      <View style={{flexDirection:'row', flexWrap:'wrap', width: '100%', height: '100%'}}>
          {
              [
                  "Games",
                  "Store",
                  "Chat",
                  "Rules",
                  "1","2","3",4
                ].map((v, i) => (
                <Btn key={i}><Text>{v}</Text></Btn>
              ))
          }
      </View>
  );
}
