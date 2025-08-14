import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const CadastroEstabelecimento = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");

  const inserirEstabelecimento = () => {
    if (!nome || !endereco || !cnpj) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    Alert.alert(
      "Estabelecimento cadastrado",
      `Nome: ${nome}\nEndereço: ${endereco}\nCNPJ: ${cnpj}`
    );

    setNome("");
    setEndereco("");
    setCnpj("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Estabelecimento</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Padaria do Zé"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Rua das Flores, 123"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.label}>CNPJ:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 12.345.678/0001-99"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={inserirEstabelecimento}>
        <Text style={styles.buttonText}>Cadastrar Estabelecimento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroEstabelecimento;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 16,
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
