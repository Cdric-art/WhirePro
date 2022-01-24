import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"}>
          {() => <Home title={"Whire Pro"} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
