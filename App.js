import React from 'react';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import MessagePage from './components/MessagePage';

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
          name="MessagePage"
          component={MessagePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
