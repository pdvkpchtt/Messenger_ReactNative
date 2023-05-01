import styled from "styled-components";
import { StatusBar } from "react-native";

const View_Layout = styled.View`
  padding: 8px;
`;

const Layout = ({ children, statusBar = false }) => {
  return (
    <View_Layout style={{ marginTop: statusBar ? StatusBar.currentHeight : 0 }}>
      {children}
    </View_Layout>
  );
};

export default Layout;
