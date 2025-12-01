import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';

export default function PesquisarProduto({ voltarHome }) {
  const [termo, setTermo] = useState('');
  const [resultado, setResultado] = useState(null);

  const handlePesquisar = async () => {
    if (!termo) {
      Alert.alert('Erro', 'Digite o nome do produto');
      return;
    }

    try {
      const response = await axios.get(`http://192.168.0.205:5000/produtos`);
      const produtos = response.data;
      const produtoEncontrado = produtos.find(p => p.nome.toLowerCase() === termo.toLowerCase());
      
      if (produtoEncontrado) {
        setResultado(produtoEncontrado);
      } else {
        Alert.alert('Nenhum produto encontrado');
        setResultado(null);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível buscar o produto');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Digite o nome do produto"
        value={termo}
        onChangeText={setTermo}
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={handlePesquisar}>
        <Text style={styles.btnText}>Pesquisar</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultado}>
          <Text style={styles.nome}>{resultado.nome}</Text>
          <Text>Quantidade: {resultado.quantidade}</Text>
          <Text>Preço: R$ {resultado.preco.toFixed(2)}</Text>
        </View>
      )}

      <TouchableOpacity style={[styles.btn, {backgroundColor: '#6c757d', marginTop: 10}]} onPress={voltarHome}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  btn: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultado: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    width: '100%',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
