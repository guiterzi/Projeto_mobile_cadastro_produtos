import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Home({ irParaCriar, irParaEditar, irParaListar, irParaPesquisar, irParaDeletar }) {
  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.titulo}>Gerenciamento de Produtos</Text>

      <TouchableOpacity style={styles.btn} onPress={irParaCriar}>
        <Text style={styles.btnText}>Criar Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#28a745', marginTop: 10 }]} onPress={irParaEditar}>
        <Text style={styles.btnText}>Editar Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#17a2b8', marginTop: 10 }]} onPress={irParaListar}>
        <Text style={styles.btnText}>Listar Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#ffc107', marginTop: 10 }]} onPress={irParaPesquisar}>
        <Text style={styles.btnText}>Pesquisar Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#dc3545', marginTop: 10 }]} onPress={irParaDeletar}>
        <Text style={styles.btnText}>Deletar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
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
