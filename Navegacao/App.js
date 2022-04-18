import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Janela Inicial 0

const JanelaInicial = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Janela Inicial</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Nova")}>
        <Text>PRÓXIMA JANELA</Text>
      </TouchableOpacity>
    </View>
  );
};

// Nova Janela 1

const NovaJanela = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nova Janela</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Inicial")}>
        <Text>JANELA ANTERIOR</Text>
      </TouchableOpacity>
    </View>
  );
};

<Stack.Screen name="Nova" component={NovaJanela} />;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={JanelaInicial} />
        <Stack.Screen name="Nova" component={NovaJanela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
