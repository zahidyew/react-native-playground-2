import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import MsgItem from './MsgItem';

const MsgPage = () => {
   const messages = [
      {
         id: 1,
         title: 'Title 1',
         subtitle: '011-2134399',
      },
      {
         id: 2,
         title: 'Something here',
         subtitle: '012-4312907',
      },
      {
         id: 3,
         title: 'A name',
         subtitle: '013-3297548',
      },
      {
         id: 4,
         title: 'Muhammad Ali',
         subtitle: '014-0932756',
      },
      {
         id: 5,
         title: 'Khabib',
         subtitle: '015-8463252',
      },
      {
         id: 6,
         title: 'Aubameyang',
         subtitle: '011-9563575',
      },
      {
         id: 7,
         title: 'Bukayo Saka',
         subtitle: '011-2134399',
      },
      {
         id: 8,
         title: 'Title 8',
         subtitle: '011-2134399',
      },
      {
         id: 9,
         title: 'Title 9',
         subtitle: '011-2134399',
      },
      {
         id: 10,
         title: 'Title 10',
         subtitle: '011-2134399',
      },
      {
         id: 11,
         title: 'Title 11',
         subtitle: '011-2134399',
      },
      {
         id: 12,
         title: 'Title 12',
         subtitle: '011-2134399',
      },
      {
         id: 13,
         title: 'Title 13',
         subtitle: '011-2134399',
      },
      {
         id: 14,
         title: 'Title 14',
         subtitle: '011-2134399',
      },
   ];

   return (
      <ScrollView>
         {
            messages.map(msg => {
               return (
                  <MsgItem key={msg.id} item={msg} />
               );
            })
         }
      </ScrollView>
   );
};

const styles = StyleSheet.create({

});

export default MsgPage;
