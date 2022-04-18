// Blibliotecas
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native"; // Usar esses componentes no meu código

// Passagem de Parametros
const App = () => {
  const [Longradouro, setLongradouro] = useState("Longradouro");
  const [CEP, setCEP] = useState("CEP");
  const [Numero, setNumero] = useState("Número");
  const [Complemento, setComplemento] = useState("Complemento");
  const [Bairro, setBairro] = useState("Bairro");
  const [Cidade, setCidade] = useState("Cidade");
  const [Estado, setEstado] = useState("Estado");

  // Tem que ter REUTURN
  return (
    <View
      focusable={false} // Deixa o teclado com foco
      style={styles.ViewPrinc}
    >
      <Text style={styles.TextPrinc}>Formulário de Endereço</Text>

      {/* Caixa de texto Longradouro*/}

      <Text style={styles.TextSecun}>Longradouro</Text>

      <TextInput
        focusable={true}
        onChangeText={setLongradouro}
        style={styles.TextInput1}
      ></TextInput>

      {/* Caixa de texto CEP */}
      <Text style={styles.TextSecun}>CEP</Text>

      <TextInput
        focusable={true}
        onChangeText={setCEP}
        maxLength={8}
        keyboardType="number-pad"
        style={styles.TextInput1}
      ></TextInput>

      {/* Caixa de texto de Número */}
      <Text style={styles.TextSecun}>Número</Text>

      <TextInput
        focusable={true}
        onChangeText={setNumero}
        keyboardType="number-pad"
        maxLength={8}
        style={styles.TextInput1}
      ></TextInput>

      {/* Caixa de texo de Complemento */}
      <Text style={styles.TextSecun}>Complemento</Text>

      <TextInput
        focusable={true}
        onChangeText={setComplemento}
        style={styles.TextInput1}
      ></TextInput>

      {/* Caixa de texto Bairro */}
      <Text style={styles.TextSecun}>Bairro</Text>

      <TextInput
        focusable={true}
        onChangeText={setBairro}
        style={styles.TextInput1}
      ></TextInput>

      {/* Caixa de texto Cidade */}
      <Text style={styles.TextSecun}>Cidade</Text>

      <TextInput
        focusable={true}
        onChangeText={setCidade}
        style={styles.TextInput1}
      ></TextInput>

      {/* Caixa de texto Estado */}
      <Text style={styles.TextSecun}>Estado</Text>

      <TextInput
        focusable={true}
        onChangeText={setEstado}
        style={styles.TextInput1}
      ></TextInput>

      {/* Botão */}
      <TouchableOpacity
        onPress={
          () => alert("Informações Concluidas!!") // Quando clicar no botão, vai aparecer essa frase
        }
        style={styles.BotaoPrin}
      >
        <Text style={styles.TextBotao}>
          Clica aqui para enviar as informações!!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Criar os Estilos "Styles" e colocar nos componentes
const styles = StyleSheet.create({
  ViewPrinc: {
    flex: 1,
    backgroundColor: "#67a2bf",
    justifyContent: "center",
    alignItems: "center",
  },
  TextPrinc: {
    color: "white",
    fontWeight: "bold",
    fontSize: "28px",
    padding: "20px", //Padding: margem dentro
  },
  TextSecun: {
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    padding: "12px", //Padding: margem dentro
  },
  TextInput1: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 16,
    fontFamily: "Arial",
    fontSize: 24,
    padding: 2, //Padding: margem dentro
  },
  BotaoPrin: {
    backgroundColor: "#516696",
    padding: "15px", //Padding: margem dentro
    margin: "28px",
    borderRadius: 7,
  },
  TextBotao: {
    color: "white",
  },
});

export default App;
