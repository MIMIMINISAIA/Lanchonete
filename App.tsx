
import React from 'react';
import Cardapio from './src/CardapioView';
import LoginLanchonete from './src/loginView';
import Carrinho from './src/carrinhoView';
import CarrinhoView from './src/CarrinhoView';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';
import Listagem from './src/screens/Listagem';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio}
        options={{headerShown: false}}/>
        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
        options={{headerShown: false}}/>
         <Stack.Screen name='Carrinho' component={Carrinho}
        options={{headerShown: false}}/>
         <Stack.Screen name='Listagem' component={Listagem}
        options={{headerShown: false}}/>
        <Stack.Screen name='CadastroCliente' component={CadastroCliente}
        options={{headerShown: false}}/>
      </Stack.Navigator>
   </NavigationContainer>
);  
}



export default App;
