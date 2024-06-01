import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppStack from "./src/components/stacks/AppStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <AppStack />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
