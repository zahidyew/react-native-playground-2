import React from 'react';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import TodosPage from './components/TodosPage';
import MsgPage from './components/messages/MsgPage';

const App = () => {
  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Todos"
          component={TodosPage}
        />
        <Stack.Screen
          name="Messages"
          component={MsgPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
