import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

import themeContext from "../config/themeContext";
import ChatPage from "../pages/ChatPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const theme = useContext(themeContext);

  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: theme.primary,
          background: theme.background,
          card: theme.card,
          border: theme.primary,
        },
      }}
    >
      <Tab.Navigator
        useLegacyImplementation={true} // помогает не крашиться react reanimated
        initialRouteName={"Chat"}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 45,
          },
        }}
      >
        <Tab.Screen
          name="Chat"
          component={ChatPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="chatbubbles-outline"
                size={27}
                color={focused ? theme.primary : theme.subcolor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="code-working"
                size={27}
                color={focused ? theme.primary : theme.subcolor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings-outline"
                size={27}
                color={focused ? theme.primary : theme.subcolor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
