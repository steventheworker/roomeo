import * as React from "react";
import {
  NavigationContainerRef,
  DrawerActionType,
} from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>();
export function navigate(name: string, params: { string: [string] }) {
  navigationRef.current?.navigate(name, params);
}
export function dispatch(action: DrawerActionType) {
  navigationRef.current?.dispatch(action);
}
