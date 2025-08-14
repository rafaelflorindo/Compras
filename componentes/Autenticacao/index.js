import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const LoginUsuario = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const realizarLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha email e senha.");
      return;
    }

    // Simulação de login (aqui você validaria com backend futuramente)
    if (email === "admin@email.com" && senha === "123456") {
      Alert.alert("Login realizado com sucesso!");
      navigation.navigate('Usuario');
    } else {
      Alert.alert("Erro", "Credenciais inválidas.");
    }

    // Limpa os campos (opcional)
    setEmail("");
    setSenha("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
    
      <TouchableOpacity style={styles.button} onPress={realizarLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginUsuario;

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
