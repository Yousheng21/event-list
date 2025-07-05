import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { colors, fontSize } from '../../../theme';
import SvgHeart from '../../../assets/heart.svg';

interface IProps {
  item: string;
  onPress: (arg?: string) => void;
}

export const NewsItem: FC<IProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.wrapperDay}>
        <View style={styles.day}>
          <Text>Today</Text>
        </View>
        <TouchableOpacity>
          <SvgHeart />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: fontSize.small, color: 'lightgrey' }}>
          № 435
        </Text>
        <Text style={{ fontSize: fontSize.large }}>
          Cnhfcnysq cjek l;fp j k.,dsb b dscjnt
        </Text>
      </View>
      <View style={styles.wrapperDate}>
        <View style={[styles.dateBlock, { flex: 0.7 }]}>
          <Text style={{ fontSize: fontSize.small, color: 'grey' }}>
            дата мероприятия
          </Text>
          <Text style={{ fontSize: fontSize.small }}>22 сентября 2023</Text>
        </View>
        <View style={[styles.dateBlock, { flex: 0.3 }]}>
          <Text style={{ fontSize: fontSize.small, color: 'grey' }}>
            начало
          </Text>
          <Text style={{ fontSize: fontSize.normal }}>11:00</Text>
        </View>
      </View>
      <Text>Donetsk</Text>
      <View style={styles.wrapperAdditional}>
        <Text>jjj cbythutdj</Text>
        <View style={styles.additional}>
          <Text>Byajkbybz</Text>
          <Text>J,vty jgsnjv</Text>
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
    backgroundColor: 'red',
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
    backgroundColor: 'pink',
  },
});
