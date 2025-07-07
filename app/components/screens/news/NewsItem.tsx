import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import { colors, fontSize } from '../../../theme';
import SvgHeart from '../../../assets/heart.svg';
import { INews } from '../../../interfaces/news.interface';
import dayjs from 'dayjs';

interface IProps {
  item: INews;
  onPress: (arg?: string) => void;
}

export const NewsItem: FC<IProps> = ({ item, onPress }) => {
  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item.id)}>
      <View style={styles.wrapperDay}>
        <View style={styles.day}>
          <Text style={{ color: colors.textLight }}>Today</Text>
        </View>
        <TouchableOpacity onPress={() => setIsChecked((prev) => !prev)}>
          <SvgHeart fill={isChecked ? colors.pink : colors.textLight} /> 
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: fontSize.small, color: 'lightgrey' }}>
          № {item.number}
        </Text>
        <Text style={{ fontSize: fontSize.large }}>{item.title}</Text>
      </View>
      <View style={styles.wrapperDate}>
        <View style={[styles.dateBlock, { flex: 0.7 }]}>
          <Text style={styles.dateBlockTitle}>дата мероприятия</Text>
          <Text style={{ fontSize: fontSize.normal }}>
            {dayjs(item.date).format('DD.MM.YYYY')}
          </Text>
        </View>
        <View style={[styles.dateBlock, { flex: 0.3 }]}>
          <Text style={styles.dateBlockTitle}>начало</Text>
          <Text style={{ fontSize: fontSize.normal }}>
            {dayjs(item.date).format('HH:mm')}
          </Text>
        </View>
      </View>
      <Text>{item.city}</Text>
      <View style={styles.wrapperAdditional}>
        <Text>{item.company}</Text>
        <View style={styles.additional}>
          <Text style={{ color: colors.textLight }}>Инфолиния</Text>
          <Text style={{ color: colors.textLight }}>Обмен опытом</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    shadowColor: colors.shadow,
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    gap: 10,
  },
  wrapperDay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  day: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: colors.orange,
  },
  wrapperDate: {
    flexDirection: 'row',
    gap: 10,
  },
  dateBlock: {
    padding: 5,
    borderRadius: 5,
    gap: 3,
    backgroundColor: 'lightgrey',
  },
  dateBlockTitle: {
    fontSize: fontSize.small,
    color: 'grey',
  },
  wrapperAdditional: {
    paddingTop: 10,
    borderTopWidth: 0.7,
    borderTopColor: 'lightgrey',
    gap: 10,
  },
  additional: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: '4%',
    backgroundColor: colors.pink,
  },
});
