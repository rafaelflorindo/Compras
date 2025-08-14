import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const CadastroProduto = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const inserirProduto = () => {
    if (!nome || !descricao || !preco) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (isNaN(parseFloat(preco))) {
      Alert.alert("Erro", "Preço inválido.");
      return;
    }

    Alert.alert("Produto cadastrado", `Nome: ${nome}\nPreço: R$ ${preco}`);

    setNome("");
    setDescricao("");
    setPreco("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      <Text style={styles.label}>Nome do Produto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Camiseta"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Camiseta 100% algodão"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Preço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 49.90"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={inserirProduto}>
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroProduto;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 16,
    backgroundColor: "#F5F9FF",
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
