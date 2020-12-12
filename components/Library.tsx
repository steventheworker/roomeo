import styled from "styled-components/native";
export const Rel = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;
interface HRProps {
  color?: string;
}
export const HR = styled.View<HRProps>`
  margin-bottom: 1px;
  border-width: 1px;
  border-color: ${(props) => (props.color ? props.color : "black")};
`;
