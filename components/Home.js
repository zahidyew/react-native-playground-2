import React, { useState } from 'react';
import {
   Button,
   StyleSheet,
   Text,
   View,
} from 'react-native';

const Home = ({ navigation }) => {
   const [counter, setCounter] = useState(0);

   return (
      <View style={styles.container}>
         <Text style={styles.text}>Hello World</Text>
         <Text> Counter: {counter} </Text>
         <View style={styles.buttonDiv}>
            <Button
               title="Click me"
               onPress={() => setCounter(counter + 1)}
            />
         </View>
         <View style={styles.buttonDiv}>
            <Button
               title="Todos"
               onPress={() => navigation.navigate('Todos')}
            />
         </View>
         <View style={styles.buttonDiv}>
            <Button
               title="Messages"
               onPress={() => navigation.navigate('Messages')}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      fontSize: 24,
   },
   buttonDiv: {
      paddingBottom: 10
   }
});

export default Home;
