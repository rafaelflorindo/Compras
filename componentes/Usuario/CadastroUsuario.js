import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const inserirUsuario = () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    Alert.alert("Usuário cadastrado", `Nome: ${nome}\nEmail: ${email}`);

    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={inserirUsuario}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroUsuario;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: "#F5F9FF",
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 16,
  },
  label: {
    color: "#0D47A1",
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#BBDEFB",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
    marginTop: 4,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#1976D2",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
