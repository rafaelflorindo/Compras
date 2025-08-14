import { StyleSheet, View } from 'react-native';

import CadastroCompra from './componentes/Compras/CadastroCompra';
import EditarCompra from './componentes/Compras/EditarCompra';
import Compra from './componentes/Compras/Index'

import CadastroProduto from './componentes/Produtos/CadastroProduto';
import EditarProduto from './componentes/Produtos/EditarProduto';
import Produto from './componentes/Produtos/Index'

import CadastroUsuario from './componentes/Usuario/CadastroUsuario';
import EditarUsuario from './componentes/Usuario/EditarUsuario';
import Usuario from './componentes/Usuario/Index'

import CadastroEstabelecimento from './componentes/Estabelecimento/CadastroEstabelecimento';
import EditarEstabelecimento from './componentes/Estabelecimento/EditarEstabelecimento';
import Estabelecimento from './componentes/Estabelecimento/Index'

import Autenticacao from './componentes/Autenticacao/index'

export default function App() {
  return (
    <View style={styles.container}>
      {
        /*<CadastroCompra />
      <EditarCompra />
      <Compra />*/}

      {/*<CadastroProduto />
      <EditarProduto />
      <Produto />*/}

      {/*<CadastroUsuario />
      <EditarUsuario />
      <Usuario />*/}
    
      {/*<CadastroEstabelecimento />
      <EditarEstabelecimento />
      <Estabelecimento />*/}

      <Autenticacao />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
