import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import users from '../mooks/Users.js';

const Usuario = () => {
  const navigation = useNavigation();
  const numeroUsuarios = users.length;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Nome: {item.nome}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroUsuario')}>
        <Text style={styles.buttonText}>+ Cadastrar novo Usuário</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Usuários Cadastrados</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      <View>
        <Text>Total: {numeroUsuarios} usuário(s) cadastrado(s)</Text>
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

export default Usuario;
