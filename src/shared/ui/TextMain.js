import { Text } from "react-native";
import { useContext } from "react";
import themeContext from "../../config/themeContext";

const TextMain = ({
  text = "undef",
  med = false,
  style = {},
  numberOfLines,
}) => {
  const theme = useContext(themeContext);

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        { color: theme.color, fontFamily: med ? "golosMed" : "golosReg" },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextMain;
