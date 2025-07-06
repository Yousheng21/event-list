import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SvgSearch from '../../../assets/search.svg';
import SvgCancel from '../../../assets/cancel.svg';
import { colors, fontSize } from '../../../theme';
import { debounce } from '../../../utils/helpers';

interface IProps {
  setSearch: (arg: string) => void;
}

export const NewsHeader: FC<IProps> = ({ setSearch }) => {
  const { top } = useSafeAreaInsets();

  const [isSearch, setIsSearch] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  useEffect(() => {
    debounce(
      () => setSearch(localSearch),
      localSearch ? 500 : 0,
    );
  }, [localSearch]);

  const handlePress = () => {
    if (isSearch) setLocalSearch('');
    setIsSearch(prev => !prev);
  };

  return (
    <View style={[styles.container, { paddingTop: top + 12 }]}>
      {isSearch ? (
        <TextInput
          style={styles.input}
          value={localSearch}
          placeholderTextColor={colors.textLight}
          onChangeText={setLocalSearch}
          placeholder="Введите название..."
          autoFocus
        />
      ) : (
        <Text style={{ fontSize: fontSize.extra, color: colors.textLight }}>
          Новые события
        </Text>
      )}
      <TouchableOpacity style={styles.searchBtn} onPress={handlePress}>
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
    backgroundColor: colors.main,
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
    maxWidth: '60%',
    fontSize: fontSize.extra,
    color: colors.textLight,
  },
});
