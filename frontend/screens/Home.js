// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// export default function Home({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Criar Produto"
//         onPress={() => navigation.navigate('CriarProduto')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Home({ irParaCriar }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={irParaCriar}>
        <Text style={styles.btnText}>Criar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
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
