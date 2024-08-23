import { iconSize } from '@expo/styleguide-native';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, Platform, useColorScheme } from 'react-native';

import BrewIcon from './icons/BrewIcon';
import LogsIcon from './icons/LogsIcon';
import SettingsIcon from './icons/SettingsIcon';
import { defaultTheme, darkTheme } from '../common/theme';
import { Text } from '../components/Text';
import type from '../constants/type';
import Brew from '../scenes/Brew';
import { PreparationStep } from '../scenes/Brew/recipes/types';
import BrewSettings from '../scenes/BrewSettings';
import BrewSummary from '../scenes/BrewSummary';
import LogDetail from '../scenes/LogDetail';
import LogDetailEdit from '../scenes/LogDetailEdit';
import Logs from '../scenes/Logs';
import Menu from '../scenes/Menu';
import Preparation from '../scenes/Preparation';
import Settings from '../scenes/Settings';
import SettingsDetail from '../scenes/Settings/SettingsDetail';
// import Test from '../scenes/Test';

export type RootStackParamList = {
  Brew: {
    id: string;
    title: string;
  };
  BrewSettings: undefined;
  BrewSummary: {
    timestamp: number;
  };
  LogDetail: {
    timestamp: number;
  };
  LogDetailEdit: {
    timestamp: number;
  };
  Preparation: PreparationStep[];
  SettingsDetail: {
    title: string;
  };
  Tabs: undefined;
  MenuStackMain: undefined;
  LogsStackMain: undefined;
  Test: undefined;
  SettingsStackMain: undefined;
};

export type TabParams = {
  Menu: undefined;
  Logs: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuStackMain" component={Menu} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function LogsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogsStackMain" component={Logs} options={{ title: 'Notes' }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsStackMain" component={Settings} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

function Tabs() {
  const colorScheme = useColorScheme();
  const { theme } = colorScheme === 'dark' ? darkTheme : defaultTheme;

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarIcon: (props) => <BrewIcon focused={props.focused} theme={theme} />,
        }}
      />
      <Tab.Screen
        name="Logs"
        component={LogsStack}
        options={{
          title: 'Notes',
          tabBarIcon: (props) => <LogsIcon focused={props.focused} theme={theme} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: (props) => <SettingsIcon focused={props.focused} theme={theme} />,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const colorScheme = useColorScheme();
  const { theme } = colorScheme === 'dark' ? darkTheme : defaultTheme;

  return (
    <NavigationContainer theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: type.headline as any,
          headerBackTitleVisible: false,
        }}>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="Brew"
          component={Brew}
          options={({ route, navigation }) => ({
            title: route.params.title,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('BrewSettings')}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Feather name="sliders" color={theme.icon.default} size={iconSize.regular} />
              </TouchableOpacity>
            ),
            headerRightContainerStyle: {
              right: 8,
            },
          })}
        />
        <Stack.Screen name="Preparation" component={Preparation} />
        <Stack.Screen
          name="SettingsDetail"
          component={SettingsDetail}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name="LogDetail"
          component={LogDetail}
          options={({ navigation, route }) => ({
            title: 'Brew Note',
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('LogDetailEdit', {
                    timestamp: route.params.timestamp,
                  })
                }
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Text type="headline">Edit</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="LogDetailEdit"
          component={LogDetailEdit}
          options={{
            presentation: Platform.select({
              ios: 'modal',
              android: 'card',
            }),
            headerShown: Platform.select({
              ios: false,
              android: true,
            }),
            title: 'Edit Note',
          }}
        />
        <Stack.Screen
          name="BrewSettings"
          component={BrewSettings}
          options={{
            headerShown: Platform.select({
              ios: false,
              android: true,
            }),
            presentation: Platform.select({
              ios: 'modal',
              android: 'card',
            }),
            title: 'Brew Settings',
          }}
        />
        <Stack.Screen
          name="BrewSummary"
          component={BrewSummary}
          options={{
            gestureEnabled: false,
            title: 'Brew Summary',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
