import { View, Pressable } from "react-native";
import { useContext } from "react";

import themeContext from "../../config/themeContext";

const SettingsCard = ({
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  children,
  pressable = false,
  onPress = () => console.log("undef"),
}) => {
  const theme = useContext(themeContext);

  return (
    <Pressable
      onPress={pressable ? () => onPress() : null}
      style={{
        backgroundColor: theme.card,
        width: "100%",
        padding: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: theme.primary,
        marginBottom: mb,
        marginTop: mt,
        marginLeftL: ml,
        marginRightL: mr,
      }}
    >
      {children}
    </Pressable>
  );
};

export default SettingsCard;
