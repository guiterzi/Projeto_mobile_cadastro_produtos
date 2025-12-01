// screens/DeletarProduto.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function DeletarProduto({ voltarHome }) {
  const [termo, setTermo] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    buscarTodosProdutos();
  }, []);

  const buscarTodosProdutos = async () => {
    try {
      const response = await axios.get('http://192.168.0.205:5000/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível buscar os produtos');
    }
  };

  const buscarPorNome = () => {
    if (!termo) {
      Alert.alert('Erro', 'Digite um nome para pesquisar');
      return;
    }
    const encontrado = produtos.find(p => p.nome.toLowerCase() === termo.toLowerCase());
    if (encontrado) {
      setProdutoSelecionado(encontrado);
    } else {
      Alert.alert('Produto não encontrado');
      setProdutoSelecionado(null);
    }
  };

  const handleDeletarProduto = async (id) => {
    try {
      await axios.delete(`http://192.168.0.205:5000/produtos/${id}`);
      Alert.alert('Sucesso', 'Produto deletado!');
      setProdutoSelecionado(null);
      setTermo('');
      buscarTodosProdutos(); // atualizar lista
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível deletar o produto');
    }
  };

  const renderProduto = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setProdutoSelecionado(item)}
    >
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>Quantidade: {item.quantidade}</Text>
      <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome do produto para pesquisar"
        value={termo}
        onChangeText={setTermo}
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={buscarPorNome}>
        <Text style={styles.btnText}>Buscar</Text>
      </TouchableOpacity>

      <Text style={{ marginVertical: 10, fontWeight: 'bold' }}>Lista de Produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduto}
        style={{ width: '100%', maxHeight: 200 }}
      />

      {produtoSelecionado && (
        <>
          <View style={styles.produtoSelecionado}>
            <Text style={styles.nome}>{produtoSelecionado.nome}</Text>
            <Text>Quantidade: {produtoSelecionado.quantidade}</Text>
            <Text>Preço: R$ {produtoSelecionado.preco.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={[styles.btn, { backgroundColor: '#dc3545' }]} onPress={() => handleDeletarProduto(produtoSelecionado.id)}>
            <Text style={styles.btnText}>Deletar Produto</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#6c757d', marginTop: 10 }]} onPress={voltarHome}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
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
    marginTop: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  nome: {
    fontWeight: 'bold',
  },
  produtoSelecionado: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
});
