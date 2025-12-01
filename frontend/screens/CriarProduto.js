import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function CriarProduto({ voltarHome }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  const handleCriarProduto = async () => {
    if (!nome || !quantidade || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.205:5000/produtos', {
        nome,
        quantidade: parseInt(quantidade),
        preco: parseFloat(preco)
      });
      Alert.alert('Sucesso', `Produto ${response.data.nome} criado!`);
      setNome('');
      setQuantidade('');
      setPreco('');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível criar o produto');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={handleCriarProduto}>
        <Text style={styles.btnText}>Criar Produto</Text>
      </TouchableOpacity>

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
});
