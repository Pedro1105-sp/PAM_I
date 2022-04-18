import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("funcionou")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEn800Mwg-pJCx4HA-l-dLjxk-hz3CDg4", // CHAVE PESSOAL
  authDomain: "loginfirepam1.firebaseapp.com",
  projectId: "loginfirepam1",
  storageBucket: "loginfirepam1.appspot.com",
  messagingSenderId: "1052622703258",
  appId: "1:1052622703258:web:39aa6a4c770822ad9c2d23"
};

// Initialize Firebase

const App = () => {

  const fire = initializeApp(firebaseConfig);
  const auth = getAuth();

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');


  return (
    <View style={styles.container}>
      <Text>LOGIN FIREBASE!</Text>


      <TextInput
        placeholder="Digite seu email:"
        style={styles.caixa}
        onChangeText={setEmail}
        value={email} />


      <TextInput
        placeholder="Digite sua senha:"
        style={styles.caixa}
        onChangeText={setSenha}
        value={senha} />


      <TouchableOpacity style={{
        justifyContent: "center",
        backgroundColor: "#f00", padding: 8, borderRadius: 10,}} 
        onPress={()=>{createUserWithEmailAndPassword(auth, email, senha)}}>
        <Text style={{ color: "white", fontWeight: "bold" }}>ENTRAR!!</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  caixa: {
    backgroundColor: "#ccc",
    margin: 8,
    padding: 8,
    minWidth: "70%",
    borderRadius: 8,  // DEIXAR A BORDAR REDONDADA

  },

  botao: {
    backgroundColor: "#b9cded",
    padding: 4,
    margin: 2,

  },

});


export default App;