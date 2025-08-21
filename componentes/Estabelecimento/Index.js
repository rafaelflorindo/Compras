import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import estabelecimentos from '../mooks/Estabelecimentos.js';

const Estabelecimento = () => {
  const navigation = useNavigation();
let numeroEstabelecimentos = estabelecimentos.length;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Nome: {item.nome}</Text>
      <Text>Endereço: {item.endereco}</Text>
      <Text>CNPJ: {item.cnpj}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroEstabelecimento')}>
        <Text style={styles.buttonText}>+ Cadastrar novo Estabelecimento</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Estabelecimentos Cadastrados</Text>
        <FlatList
          data={estabelecimentos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      <View>
        <Text>Total: {numeroEstabelecimentos} estabelecimento(s) cadastrado(s)</Text>
      </View>
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    marginTop: 12,
    marginBottom: 24,
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

export default Estabelecimento;
