import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { NewsItem } from './NewsItem';
import { ModalUI } from '../../ui/ModalUI';
import { NewsDetail } from './NewsDetail';

const data = [
  'fsdf',
  '3324',
  '33242',
  '33241',
  '3324x',
  '3324d',
  '3324ff',
  '3324f',
  '33242',
  '33241',
  '332422',
  '332411',
];

export const News = () => {
  const [id, setId] = useState<string | undefined>(undefined);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item }) => (
          <NewsItem
            key={item}
            item={item}
            onPress={(arg?: string) => setId(arg)}
          />
        )}
      />

      <ModalUI isVisible={!!id} onBack={() => setId(undefined)}>
        <NewsDetail id={id} onClose={() => setId(undefined)} />
      </ModalUI>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 24,
    gap: 30,
  },
});
