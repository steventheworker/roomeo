import styled from "styled-components/";
import { Dimensions } from "react-native";

const curDimensions = { width: 0, height: 0 };
export function getDimensions() {
  const d = Dimensions.get("window");
  curDimensions.width = d.width;
  curDimensions.height = d.height;
  return d;
}
export function getWidth(a?: boolean | number) {
  if (a) return getDimensions().width;
  return curDimensions.width;
}
export function getHeight(a?: boolean | number) {
  if (a) return getDimensions().height;
  return curDimensions.height;
}
export const isMobile = styled.div && styled.div`` ? false : true;
export const statusBarHeight = isMobile ? 18 : 0;
export const px = (x: number | string, returnNum: boolean | number = false) => {
  x = parseFloat(x + "");
  const ret = isMobile ? x + statusBarHeight : x;
  if (returnNum) return ret;
  return ret + "px";
};
