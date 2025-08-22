import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Autenticação */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Usuário */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Usuario')}>
        <Text style={styles.buttonText}>Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroUsuario')}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>

      {/* Produto */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produto')}>
        <Text style={styles.buttonText}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroProduto')}>
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>

      {/* Estabelecimento */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Estabelecimento')}>
        <Text style={styles.buttonText}>Estabelecimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroEstabelecimento')}>
        <Text style={styles.buttonText}>Cadastrar Estabelecimento</Text>
      </TouchableOpacity>

      {/* Compra */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compra')}>
        <Text style={styles.buttonText}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroCompra')}>
        <Text style={styles.buttonText}>Cadastrar Compra</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: '#F5F9FF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 16,
  },
  label: {
    color: '#0D47A1',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BBDEFB',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Home;
