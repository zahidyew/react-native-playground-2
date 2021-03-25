import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const MsgItem = ({ item }) => {
   return (
      <TouchableOpacity>
         <View style={styles.container}>
            <Image
               style={styles.tinyLogo}
               source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
               }}
            />
            <View>
               <Text style={styles.title}> {item.title} </Text>
               <Text style={styles.subtitle}> {item.subtitle} </Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: 80,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      flexDirection: 'row',
      padding: 15,
   },
   tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      marginRight: 15,
   },
   title: {
      fontSize: 18,
      fontWeight: '400',
   },
   subtitle: {
      color: 'gray',
   },
});

MsgItem.propTypes = {
   item: PropTypes.object.isRequired
};

export default MsgItem;
