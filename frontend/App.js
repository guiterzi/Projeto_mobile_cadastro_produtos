// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from './screens/Home';
// import CriarProduto from './screens/CriarProduto';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="CriarProduto" component={CriarProduto} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import CriarProduto from './screens/CriarProduto';

export default function App() {
  const [tela, setTela] = useState('home'); // "home" ou "criar"

  return (
    <View style={{ flex: 1 }}>
      {tela === 'home' && <Home irParaCriar={() => setTela('criar')} />}
      {tela === 'criar' && <CriarProduto voltarHome={() => setTela('home')} />}
    </View>
  );
}
