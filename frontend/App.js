import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import CriarProduto from './screens/CriarProduto';
import EditarProduto from './screens/EditarProduto';
import ListarProdutos from './screens/ListarProdutos';
import PesquisarProduto from './screens/PesquisarProduto';
import DeletarProduto from './screens/DeletarProduto';

export default function App() {
  // Define a tela atual
  const [tela, setTela] = useState('home'); // 'home', 'criar', 'editar', 'listar', 'pesquisar', 'deletar'

  return (
    <View style={{ flex: 1 }}>
      {tela === 'home' && (
        <Home
          irParaCriar={() => setTela('criar')}
          irParaEditar={() => setTela('editar')}
          irParaListar={() => setTela('listar')}
          irParaPesquisar={() => setTela('pesquisar')}
          irParaDeletar={() => setTela('deletar')}
        />
      )}

      {tela === 'criar' && <CriarProduto voltarHome={() => setTela('home')} />}
      {tela === 'editar' && <EditarProduto voltarHome={() => setTela('home')} />}
      {tela === 'listar' && <ListarProdutos voltarHome={() => setTela('home')} />}
      {tela === 'pesquisar' && <PesquisarProduto voltarHome={() => setTela('home')} />}
      {tela === 'deletar' && <DeletarProduto voltarHome={() => setTela('home')} />}
    </View>
  );
}
