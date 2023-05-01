import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

import themeContext from "../config/themeContext";
import MapPage from "../pages/MapPage";
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
        initialRouteName={"Map"}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
        }}
      >
        <Tab.Screen
          name="Map"
          component={MapPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="baseball-sharp"
                size={30}
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
                name="baseball-sharp"
                size={30}
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
                size={30}
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
