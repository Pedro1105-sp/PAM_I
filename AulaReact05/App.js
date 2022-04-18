// Blibliotecas
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'; // Usar esses componentes no meu código
import pernalonga from "./assets/Pernalonga.png";

const App = () => {  // () => Passagem de parametros

  const [Texto, setTexto] = useState("");
  const[textoDaNoite, setTextoDaNoite] = useState('Noite Quente!!');


  return(
    <View 
    focusable={false} // Dá o foco do teclado no cursor do objeto -> Fica piscando
    style=
    {{ 
      flex: 1,
      backgroundColor: 'red', 
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
     
     
      <Text style=
      {{ 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: '28px', 
      }}>{textoDaNoite}
        Noite Quente!!
      </Text> {/* O texto tem o estilo com a cor branca e em negrito */}

      <Image source={pernalonga} style={{width: 100, height: 100}}></Image>

      <TouchableOpacity  //   Touchable Botão 
      onPress=
      {
        () => alert('Pernalonga na área!!')
      }
      style=
      {{
        backgroundColor: 'darkgreen', 
        padding: '16px', 
        margin: '48px',
        borderRadius: 7,
      }}> {/*   //Padding: margem dentro     //Margin: margem fora */}
        <Text style={{color: 'white',}}>CLIQUE AQUI!!</Text>
      </TouchableOpacity>

      <TextInput 
      focusable={true}
      onChangeText={setTexto}
      style=
      {{
        backgroundColor: 'white',
        borderColor:'black',
        borderRadius: 16,
        fontFamily: 'Arial',
        fontSize: 24,
        padding: 8,
      }}>

      </TextInput>  {/* Caixa de Texto */}

      <TouchableOpacity onPress={()=>{setTextoDaNoite(Texto)}} style={{backgroundColor: "blue", padding: 8, }}>
        <Image source={{uri:"https://w7.pngwing.com/pngs/737/379/png-transparent-bugs-bunny-illustration-domestic-rabbit-bugs-bunny-easter-bunny-hare-bugs-bunny-mammal-photography-vertebrate.png"}}
        style={{width: 100, height: 100}}></Image>
      </TouchableOpacity>





    </View>
  );
};



export default App;