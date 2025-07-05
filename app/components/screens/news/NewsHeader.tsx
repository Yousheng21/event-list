import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SvgSearch from '../../../assets/search.svg';
import SvgCancel from '../../../assets/cancel.svg';
import { colors, fontSize } from '../../../theme';

export const NewsHeader = () => {
  const { top } = useSafeAreaInsets();

  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={[styles.container, { paddingTop: top + 12 }]}>
      {isSearch ? (
        <TextInput
          style={styles.input}
          value={search}
          placeholderTextColor={colors.textLight}
          onChangeText={setSearch}
          placeholder="Введите название..."
          autoFocus
        />
      ) : (
        <Text style={{ fontSize: fontSize.extra, color: colors.textLight }}>
          Новые события
        </Text>
      )}
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => setIsSearch(prev => !prev)}
      >
        {isSearch ? <SvgCancel /> : <SvgSearch />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  searchBtn: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  input: {
    borderBottomColor: 'white',
    maxWidth: "60%",
    fontSize: fontSize.extra,
    color: colors.textLight,
  },
});
