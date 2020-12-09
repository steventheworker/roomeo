import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Splash: undefined;
  Home: undefined;
};
type DrawerParamList = {
  Home: undefined;
  Room: { roomid: string };
};
export type StackProps = StackScreenProps<RootStackParamList, "Login">;
export type DrawerProps = DrawerScreenProps<DrawerParamList, "Room">;
