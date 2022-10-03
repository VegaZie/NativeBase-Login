import React from "react";
import { View, NativeBaseProvider } from "native-base";
import { Platform } from "react-native";

import MainStack from "./components/Navigation/MainStack";


export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <MainStack />
      </View>
    </NativeBaseProvider>
  );
}
