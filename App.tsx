import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//routing stuff
import Splash from "./screens/Splash";
import Login from "./screens/Login";
const Stack = createStackNavigator();
import DrawerRoutes from "./components/drawer";

import { StatusBar } from "expo-status-bar";
import CustomHeader from "./components/header/CustomHeader";

import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <ThemeProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: function (props) {
                return <CustomHeader {...props} />;
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={DrawerRoutes}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
//sockets
declare global {
  interface Event {
    message: string;
  }
}
const ws = new WebSocket("ws://192.168.0.204:8000/sockets/websocket");
ws.onopen = () => {
  ws.send("autojoin|"); // send a message
};
ws.onerror = (e) => {
  console.log(e.message);
};
ws.onclose = (e) => {
  console.log(e.code, e.reason);
};
ws.onmessage = (e) => {
  console.log(e.data);
};
