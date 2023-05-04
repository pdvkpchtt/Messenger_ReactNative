import { StatusBar, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import Modal from "react-native-modal";

import themeContext from "../config/themeContext";
import TextMain from "../shared/ui/TextMain";
import Layout from "../hoc/Layout";
import ThemeSwitcher from "../components/settings/ThemeSwitcher";
import SettingsCard from "../shared/ui/SettingsCard";

const SettingsPage = () => {
  const theme = useContext(themeContext);

  const [modal, setModal] = useState(false);

  return (
    <Layout statusBar>
      {/* switch theme */}
      <SettingsCard pressable onPress={() => setModal(true)} mt={12}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons size={20} name="color-palette" color={theme.primary} />
            <TextMain
              text="Themes"
              style={{ fontSize: 16, fontFamily: "golosReg", marginLeft: 4 }}
            />
          </View>

          <Ionicons size={20} name="arrow-undo" color={theme.primary} />
        </View>
      </SettingsCard>

      {/* privacy */}
      <SettingsCard pressable onPress={() => console.log("a")} mt={12}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons size={20} name="lock-closed" color={theme.primary} />
            <TextMain
              text="Privacy"
              style={{ fontSize: 16, fontFamily: "golosReg", marginLeft: 4 }}
            />
          </View>

          <Ionicons size={20} name="ios-arrow-forward" color={theme.primary} />
        </View>
      </SettingsCard>

      {/* themes modal */}
      <Modal
        isVisible={modal}
        backdropOpacity={0.5}
        style={{ margin: 0, padding: 20, alignItems: "center" }}
        backdropTransitionOutTiming={10}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        // onBackdropPress={() => setModal(false)}
        // onBackButtonPress={() => setModal(false)}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={["down"]}
      >
        <ThemeSwitcher />
      </Modal>
    </Layout>
  );
};

export default SettingsPage;
