import { DrawerActions } from "@react-navigation/native";
import { GestureResponderEvent } from "react-native";
import * as RootNavigation from "./RootNavigation";
import { isMobile } from "./fn";
function FT(x: number, y: number) {
  firstTouch.x = x;
  firstTouch.y = y;
}
function LT(x: number, y: number) {
  lastTouch.x = x;
  lastTouch.y = y;
}
const firstTouch = { x: 0, y: 0 };
const lastTouch = { x: 0, y: 0 };
//start
export function TS(e: GestureResponderEvent) {
  const x = e.nativeEvent.pageX,
    y = e.nativeEvent.pageY;
  FT(x, y);
  LT(x, y);
}
//end
export function TE(e: GestureResponderEvent) {
  const x = e.nativeEvent.pageX,
    y = e.nativeEvent.pageY;
  //web doesn't have a way to open drawer
  if (!isMobile && firstTouch.x <= 4 && x > 300 - firstTouch.x) {
    RootNavigation.dispatch(DrawerActions.toggleDrawer());
  }
  LT(x, y);
}
//move
export function TM(e: GestureResponderEvent) {
  const x = e.nativeEvent.pageX,
    y = e.nativeEvent.pageY;
  LT(x, y);
}
