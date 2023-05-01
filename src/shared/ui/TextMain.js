import { Text } from "react-native";
import { useContext } from "react";
import themeContext from "../../config/themeContext";

const TextMain = ({ text = "undef", style = {} }) => {
  const theme = useContext(themeContext);

  return <Text style={[{ color: theme.color }, style]}>{text}</Text>;
};

export default TextMain;
