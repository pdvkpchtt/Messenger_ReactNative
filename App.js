import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import { useFonts } from "expo-font";

import Navigation from "./src/hoc/Navigation";
import themeContext from "./src/config/themeContext";
import theme from "./src/config/theme";

export default function App() {
  const [mode, setMode] = useState({
    background: "#f6f6f8",
    card: "#fff",
    color: "#2c2c2c",
    primary: "#5875e8",
    statusbar: "dark",
    subcolor: "#bfbfbf",
    theme: "light",
  });

  const [loaded] = useFonts({
    golosMed: require("./assets/fonts/GolosText-Medium.ttf"),
    golosReg: require("./assets/fonts/GolosText-Regular.ttf"),
  });

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(theme[data]);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <themeContext.Provider value={mode}>
        <Navigation />
      </themeContext.Provider>

      <StatusBar style={mode.theme === "dark" ? "light" : "dark"} />
    </View>
  );
}
