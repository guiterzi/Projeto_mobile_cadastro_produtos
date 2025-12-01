// import React, { useState } from 'react';
// import { View } from 'react-native';
// import Home from './screens/Home';
// import CriarProduto from './screens/CriarProduto';
// import EditarProduto from './screens/EditarProduto';
// import ListarProdutos from './screens/ListarProdutos'; // tela para listar produtos

// export default function App() {
//   const [tela, setTela] = useState('home'); // "home", "criar", "editar", "listar"

//   return (
//     <View style={{ flex: 1 }}>
//       {tela === 'home' && (
//         <Home
//           irParaCriar={() => setTela('criar')}
//           irParaEditar={() => setTela('editar')}
//           irParaListar={() => setTela('listar')}
//         />
//       )}
//       {tela === 'criar' && <CriarProduto voltarHome={() => setTela('home')} />}
//       {tela === 'editar' && <EditarProduto voltarHome={() => setTela('home')} />}
//       {tela === 'listar' && <ListarProdutos voltarHome={() => setTela('home')} />}
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import CriarProduto from './screens/CriarProduto';
import EditarProduto from './screens/EditarProduto';
import ListarProdutos from './screens/ListarProdutos';
import PesquisarProduto from './screens/PesquisarProduto'; // nova tela

export default function App() {
  const [tela, setTela] = useState('home');

  return (
    <View style={{ flex: 1 }}>
      {tela === 'home' && (
        <Home
          irParaCriar={() => setTela('criar')}
          irParaEditar={() => setTela('editar')}
          irParaListar={() => setTela('listar')}
          irParaPesquisar={() => setTela('pesquisar')}
        />
      )}
      {tela === 'criar' && <CriarProduto voltarHome={() => setTela('home')} />}
      {tela === 'editar' && <EditarProduto voltarHome={() => setTela('home')} />}
      {tela === 'listar' && <ListarProdutos voltarHome={() => setTela('home')} />}
      {tela === 'pesquisar' && <PesquisarProduto voltarHome={() => setTela('home')} />}
    </View>
  );
}
