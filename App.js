import React from "react";
import { View, NativeBaseProvider } from "native-base";
import { Platform } from "react-native";

import Login from "./components/Login_module/Login";


export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <Login />
      </View>
    </NativeBaseProvider>
  );
}
