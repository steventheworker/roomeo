import React, { useContext, useState } from "react";
import { Room, RType, RoomsList } from "../screens/Room";

class AppState {
  room: string = "";
  rooms: Room[] = [];
  roomsList: { [roomid: string]: RType } = RoomsList;
}

const app = new AppState();
const ThemeContext = React.createContext(app);
const ThemeUpdateContext = React.createContext((state: typeof app) => {});

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: Props) {
  const [state, setState] = useState(app);
  function toggleTheme(state: typeof app) {
    setState((prevState) => state);
  }
  return (
    <ThemeContext.Provider value={state}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
