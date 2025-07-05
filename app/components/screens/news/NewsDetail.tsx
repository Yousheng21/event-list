import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { fontSize } from '../../../theme';

interface IProps {
  id: string;
  onClose: () => void;
}

export const NewsDetail: FC<IProps> = ({ id, onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 0.2 }} onPress={onClose}>
          <Text>Закрыть</Text>
        </TouchableOpacity>
        <Text style={{ flex: 0.6, textAlign: 'center' }}>DetailPage</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.block}>
          <Text style={{ fontSize: fontSize.large, color: 'grey' }}>
            Author
          </Text>
          <Text style={{ fontSize: fontSize.normal, color: 'grey' }}>
            f;lfkjl;kdkjfkldjslkfjlkdsjlfkjdksjflk
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={{ fontSize: fontSize.large, color: 'grey' }}>
            Author
          </Text>
          <Text style={{ fontSize: fontSize.normal, color: 'grey' }}>
            f;lfkjl;kdkjfkldjslkfjlkdsjlfkjdksjflk
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
    paddingHorizontal: 18,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 10,
    gap: 10,
  },
  block: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
  },
});
