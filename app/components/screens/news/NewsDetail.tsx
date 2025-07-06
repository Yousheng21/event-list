import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { colors, fontSize } from '../../../theme';
import { useGetNewsByIdQuery } from '../../../services/news.service';
import dayjs from 'dayjs';

interface IProps {
  id: string;
  onClose: () => void;
}

export const NewsDetail: FC<IProps> = ({ id, onClose }) => {
  const { data } = useGetNewsByIdQuery({ id });

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
          <Text style={styles.title}>City</Text>
          <Text style={styles.text}>{data?.city}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.text}>{data?.title}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.text}>{data?.description}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.title}>Date</Text>
          <Text style={styles.text}>
            {dayjs(data?.date).format('DD.MM.YYYY HH:mm')}
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.title}>Company</Text>
          <Text style={styles.text}>{data?.company}</Text>
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
    borderBottomColor: colors.textDark,
    borderBottomWidth: 1,
    padding: 10,
    paddingHorizontal: 18,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 10,
    gap: 20,
  },
  title: {
    fontSize: fontSize.large,
    color: colors.textDark,
    fontWeight: '700',
  },
  text: {
    fontSize: fontSize.normal,
    color: colors.secondary,
  },
  block: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
});
