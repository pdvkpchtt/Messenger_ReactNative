import { useState } from "react";
import { View, Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

import themeContext from "../../config/themeContext";
import SettingsCard from "../../shared/ui/SettingsCard";
import TextMain from "../../shared/ui/TextMain";

const ThemeSwitcher = () => {
  const theme = useContext(themeContext);

  const [modeState, setModeState] = useState([
    { id: 0, name: "light", state: theme.theme === "light" ? true : false },
    { id: 1, name: "dark", state: theme.theme === "dark" ? true : false },
    { id: 2, name: "green", state: theme.theme === "green" ? true : false },
    { id: 3, name: "red", state: theme.theme === "red" ? true : false },
  ]);

  const themes = [
    {
      text: "Light",
      icon: "sunny",
    },
    {
      text: "Dark",
      icon: "moon",
    },
    {
      text: "Green",
      icon: "leaf",
    },
    {
      text: "Red",
      icon: "warning",
    },
  ];

  return (
    <SettingsCard>
      {themes.map((item, key) => (
        <View
          key={key}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons size={20} name={item.icon} color={theme.primary} />
            <TextMain
              text={item.text}
              style={{ fontSize: 16, fontFamily: "golosReg", marginLeft: 4 }}
            />
          </View>

          <Switch
            value={modeState[key].state}
            thumbColor={theme.primary}
            trackColor={{ true: theme.primary, false: theme.subcolor }}
            onValueChange={(value) => {
              setModeState(
                modeState.map((item) =>
                  item.id === key
                    ? { ...item, state: true }
                    : { ...item, state: false }
                )
              );

              EventRegister.emit("changeTheme", modeState[key].name);
            }}
          />
        </View>
      ))}
    </SettingsCard>
  );
};

export default ThemeSwitcher;
