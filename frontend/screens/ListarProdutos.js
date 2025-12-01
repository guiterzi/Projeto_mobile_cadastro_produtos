// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// export default function ListarProdutos({ navigation }) {
//   const [produtos, setProdutos] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const buscarProdutos = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://192.168.0.205:5000/produtos');
//       setProdutos(response.data);
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Erro', 'Não foi possível carregar os produtos');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     buscarProdutos();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.nome}>{item.nome}</Text>
//       <Text>Quantidade: {item.quantidade}</Text>
//       <Text>Preço: R$ {item.preco}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#007bff" />
//       ) : (
//         <FlatList
//           data={produtos}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderItem}
//           contentContainerStyle={{ paddingBottom: 20 }}
//         />
//       )}

//       {/* <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
//         <Text style={styles.btnText}>Voltar</Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity onPress={voltarHome}>
//         <Text>Voltar</Text>
//         </TouchableOpacity>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   itemContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 15,
//     marginBottom: 10,
//   },
//   nome: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
//   btn: {
//     backgroundColor: '#6c757d',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// });


// screens/ListarProdutos.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function ListarProdutos({ voltarHome }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await axios.get('http://192.168.0.205:5000/produtos'); // seu IP e porta
      setProdutos(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível buscar os produtos');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>Quantidade: {item.quantidade}</Text>
      <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <TouchableOpacity style={styles.btn} onPress={voltarHome}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

