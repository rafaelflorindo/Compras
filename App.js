import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './componentes/Home';
import CadastroCompra from './componentes/Compras/CadastroCompra';
import EditarCompra from './componentes/Compras/EditarCompra';
import Compra from './componentes/Compras/Index';

import CadastroProduto from './componentes/Produtos/CadastroProduto';
import EditarProduto from './componentes/Produtos/EditarProduto';
import Produto from './componentes/Produtos/Index';

import CadastroUsuario from './componentes/Usuario/CadastroUsuario';
import EditarUsuario from './componentes/Usuario/EditarUsuario';
import Usuario from './componentes/Usuario/Index';

import CadastroEstabelecimento from './componentes/Estabelecimento/CadastroEstabelecimento';
import EditarEstabelecimento from './componentes/Estabelecimento/EditarEstabelecimento';
import Estabelecimento from './componentes/Estabelecimento/Index';

import LoginUsuario from './componentes/Autenticacao/index'; // seu componente de login

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        {/* Autenticação */}
        <Stack.Screen name="Login" component={LoginUsuario} />

        {/* Usuário */}
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="EditarUsuario" component={EditarUsuario} />

        {/* Produto */}
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        <Stack.Screen name="EditarProduto" component={EditarProduto} />

        {/* Estabelecimento */}
        <Stack.Screen name="Estabelecimento" component={Estabelecimento} />
        <Stack.Screen name="CadastroEstabelecimento" component={CadastroEstabelecimento} />
        <Stack.Screen name="EditarEstabelecimento" component={EditarEstabelecimento} />

        {/* Compra */}
        <Stack.Screen name="Compra" component={Compra} />
        <Stack.Screen name="CadastroCompra" component={CadastroCompra} />
        <Stack.Screen name="EditarCompra" component={EditarCompra} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}