import { useState } from "react";
import { View, Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

import themeContext from "../../config/themeContext";
import TextMain from "../../shared/ui/TextMain";

const ThemeSwitcher = () => {
  const theme = useContext(themeContext);

  const [modeState, setModeState] = useState([
    { id: 0, name: "light", state: theme.theme === "light" ? true : false },
    { id: 1, name: "dark", state: theme.theme === "dark" ? true : false },
    { id: 2, name: "fog", state: theme.theme === "fog" ? true : false },
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
      text: "Fog",
      icon: "cloud",
    },
  ];

  return (
    <View
      style={{
        padding: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        borderWidth: 1.5,
        borderColor: theme.primary,
        backgroundColor: theme.card,
      }}
    >
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
    </View>
  );
};

export default ThemeSwitcher;
