import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Menu</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>

      {/* Usuário */}
      <TouchableOpacity onPress={() => navigation.navigate('Usuario')}>
        <Text>Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroUsuario')}>
        <Text>Cadastrar Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditarUsuario')}>
        <Text>Editar Usuário</Text>
      </TouchableOpacity>

      {/* Produto */}
      <TouchableOpacity onPress={() => navigation.navigate('Produto')}>
        <Text>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroProduto')}>
        <Text>Cadastrar Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditarProduto')}>
        <Text>Editar Produto</Text>
      </TouchableOpacity>

      {/* Estabelecimento */}
      <TouchableOpacity onPress={() => navigation.navigate('Estabelecimento')}>
        <Text>Estabelecimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroEstabelecimento')}>
        <Text>Cadastrar Estabelecimento</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditarEstabelecimento')}>
        <Text>Editar Estabelecimento</Text>
      </TouchableOpacity>

      {/* Compra */}
      <TouchableOpacity onPress={() => navigation.navigate('Compra')}>
        <Text>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CadastroCompra')}>
        <Text>Cadastrar Compra</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditarCompra')}>
        <Text>Editar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
