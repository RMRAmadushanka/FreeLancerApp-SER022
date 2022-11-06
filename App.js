import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import Details from "./screens/Details";
import HomeCategoryInfos from "./screens/HomeCategoryInfos";
import Dashboard from "./screens/Dashboard";
import CategoryDashboard from "./screens/CategoryDashboard";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Details} />
        <Stack.Screen name="HomeCategoryInfos" component={HomeCategoryInfos} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CategoryDashboard" component={CategoryDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


