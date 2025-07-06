import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { NewsItem } from './NewsItem';
import { ModalUI } from '../../ui/ModalUI';
import { NewsDetail } from './NewsDetail';
import { useGetNewsListQuery } from '../../../services/news.service';
import { usePagination } from '../../../hooks/usePagination';
import { NewsHeader } from './NewsHeader';
import { api, StoreTagTypes } from '../../../services/api';
import { LoaderRenderWithCondition } from '../../hoc/LoaderRenderWithCondition';
import { NotFound } from './NotFound';

export const News = () => {
  const [id, setId] = useState<string | undefined>(undefined);
  const [params, setParams] = useState({ take: 5, skip: 0, search: '' });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isLoading, isFetching } = useGetNewsListQuery({
    params,
  });

  const { attrFlatList } = usePagination({
    totalPages: 10,
    search: params.search,
    setCurrent: arg => setParams({ ...params, skip: arg }),
    isLoading: isFetching,
    current: params.skip,
  });

  const handleSearch = useCallback(
    (arg: string) => {
      setParams({
        ...params,
        skip: 0,
        search: arg,
      });
    },
    [params],
  );

  const handleRefresh = () => {
    setIsRefreshing(true);

    api.util.invalidateTags([StoreTagTypes.News]);
    setParams({ ...params, skip: 0 });

    setIsRefreshing(false);
  };

  return (
    <>
      <NewsHeader setSearch={handleSearch} />
      <View style={styles.container}>
        <LoaderRenderWithCondition condition={!isLoading}>
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            renderItem={({ item }) => (
              <NewsItem
                key={item.id}
                item={item}
                onPress={(arg?: string) => setId(arg)}
              />
            )}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            ListEmptyComponent={<NotFound />}
            {...attrFlatList}
          />
        </LoaderRenderWithCondition>

        <ModalUI isVisible={!!id} onBack={() => setId(undefined)}>
          {id && <NewsDetail id={id} onClose={() => setId(undefined)} />}
        </ModalUI>
      </View>
    </>
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
