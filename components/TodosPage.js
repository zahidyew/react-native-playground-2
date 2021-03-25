import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const TodosPage = () => {
   const [isLoading, setLoading] = useState(true);
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const url = 'https://jsonplaceholder.typicode.com/todos';
            const res = await fetch(url);
            const data = await res.json();

            setTodos(data);
            setLoading(false);
            //console.log(todos);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   const renderTodos = ({ item }) => {
      return (
         <View style={styles.todosDiv}>
            {item.completed ?
               <Text style={styles.completedTodos}> {item.id}. {item.title} </Text> :
               <Text style={styles.uncompleteTodos}> {item.id}. {item.title} </Text>
            }
         </View>
      );
   };

   return (
      <View>
         {isLoading ?
            <ActivityIndicator /> : (
               <FlatList
                  data={todos}
                  keyExtractor={item => item.id}
                  renderItem={renderTodos}
               />
            )}
      </View>
   );

   /* return (
      <ScrollView>
         {isLoading ?
            <ActivityIndicator /> : (
               todos.map(item => {
                  return (
                     <Text key={item.id}> {item.id}. {item.title} </Text>
                  );
               })
            )}
      </ScrollView>
   ); */
};

const styles = StyleSheet.create({
   todosDiv: {
      marginTop: 8,
      marginBottom: 8,
      paddingLeft: 10,
      paddingRight: 10,

   },
   completedTodos: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
   },
   uncompleteTodos: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      color: 'gray',
   }
});

export default TodosPage;
