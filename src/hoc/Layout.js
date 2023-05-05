import { View } from "react-native";
import { StatusBar } from "react-native";

const Layout = ({ children, statusBar = false, noPadding = false }) => {
  return (
    <View
      style={{
        marginTop: statusBar ? StatusBar.currentHeight : 0,
        padding: noPadding ? 0 : 8,
        // borderWidth: 1,
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
