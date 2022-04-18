import React from 'react'; // importando a biblioteca React para
// habilitar o uso do JSX
// Importando componentes nativos Text e View do RN

import {Text, View} from 'react-native';
// Declarando a função HelloWorldApp como um Componente Funcional
// Ele retorna uma View com uma Text dentro dela

const HelloWorldApp = () => 
{
  // Container de Objetos
  // Cria um contêiner para agrupar objetos visuais
  return 
<View style=
{
  {
    flex: 1, // Flex1 preenche todo o espaço disponível
    justifyContent: "center", // centraliza verticalmente os objetos internos
    alignItems: "center", // centraliza horizontalmente os objetos internos
    backgroundColor: 'red', // é a cor
  }
}>
  <Text>Hello World</Text> 
</View>;

};
};
export default HelloWorldApp;
