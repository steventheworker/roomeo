import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Splash: undefined;
  Home: undefined;
};

export type StackProps = StackScreenProps<RootStackParamList, "Login">;
