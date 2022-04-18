import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Formulário</Text>
      <Text>Nome:</Text>
      <TextInput
        maxLength={200} //Limite de caracter
        // multiline = {true} //Criar mais uma linha
        // numberOfLines ={3} //Quantidade de linhas
        // margin = {40} //Objeto em relação a margem
        padding={8}
        style={{
          backgroundColor: "#F5F5F5",
          borderWidth: 2,
          borderRadius: 16,
          height: "6%",
          width: "90%",
          marginHorizontal: "5%",
        }}
      ></TextInput>
      <Button title="Cadastrar!!"></Button>
    </View>
  );
};

export default App;
