import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts, Kanit_600SemiBold as Kanit } from "@expo-google-fonts/kanit";
import AppLoading from "expo-app-loading";

import {
  HomeScreen,
  LevelScreen,
  EasyScreen,
  EasyScreen2,
  EasyScreen3,
  EasyScreen4,
  EasyScreen5,
  EasyScreen6,
  EasyScreen7,
  EasyScreen8,
  EasyScreen9,
  EasyScreen10,
  NormalScreen,
  NormalScreen2,
  NormalScreen3,
  NormalScreen4,
  NormalScreen5,
  NormalScreen6,
  NormalScreen7,
  NormalScreen8,
  NormalScreen9,
  NormalScreen10,
  HardScreen,
  HardScreen2,
  HardScreen3,
  HardScreen4,
  HardScreen5,
  HardScreen6,
  HardScreen7,
  HardScreen8,
  HardScreen9,
  HardScreen10,
  DictionaryScreen,
  ResultScreen,
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const EasyStack = () => {
    return (
      <>
        <Stack.Screen
          name="Easy"
          component={EasyScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy2"
          component={EasyScreen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy3"
          component={EasyScreen3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy4"
          component={EasyScreen4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy5"
          component={EasyScreen5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy6"
          component={EasyScreen6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy7"
          component={EasyScreen7}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy8"
          component={EasyScreen8}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy9"
          component={EasyScreen9}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Easy10"
          component={EasyScreen10}
          options={{
            headerShown: false,
          }}
        />
      </>
    );
  };

  const NormalStack = () => {
    return (
      <>
        <Stack.Screen
          name="Normal"
          component={NormalScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal2"
          component={NormalScreen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal3"
          component={NormalScreen3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal4"
          component={NormalScreen4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal5"
          component={NormalScreen5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal6"
          component={NormalScreen6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal7"
          component={NormalScreen7}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal8"
          component={NormalScreen8}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal9"
          component={NormalScreen9}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Normal10"
          component={NormalScreen10}
          options={{
            headerShown: false,
          }}
        />
      </>
    );
  };

  const HardStack = () => {
    return (
      <>
        <Stack.Screen
          name="Hard"
          component={HardScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard2"
          component={HardScreen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard3"
          component={HardScreen3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard4"
          component={HardScreen4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard5"
          component={HardScreen5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard6"
          component={HardScreen6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard7"
          component={HardScreen7}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard8"
          component={HardScreen8}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard9"
          component={HardScreen9}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hard10"
          component={HardScreen10}
          options={{
            headerShown: false,
          }}
        />
      </>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Level"
          component={LevelScreen}
          options={{
            headerShown: false,
          }}
        />
        {EasyStack()}
        {NormalStack()}
        {HardStack()}
        <Stack.Screen
          name="Dictionary"
          component={DictionaryScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
