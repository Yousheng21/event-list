import React, { useCallback, useMemo } from 'react';
import { FlatListProps, View } from 'react-native';
import { Loader } from '../components/ui/Loader';

interface IProps {
  totalPages: number;
  take?: number;
  search: string;
  setCurrent: (arg: number) => void;
  isLoading: boolean;
  current: number;
}

interface IReturn {
  setCurrent: (arg: number) => void;
  attrFlatList: Partial<FlatListProps<any>>;
}

export const usePagination = ({ take = 5, totalPages, current, isLoading, setCurrent }: IProps): IReturn => {
  const loadMoreData = useCallback(async () => {
    if (current + take >= totalPages || isLoading) return;
    

    setCurrent(current + 5)

  }, [current, take, totalPages, isLoading, setCurrent]);

  const footer = useMemo(
    () => (
      <View>
        {isLoading ? (
          <View style={{ marginBottom: 40 }}>
            <Loader />
          </View>
        ) : (
          <View />
        )}
      </View>
    ),
    [isLoading],
  );

  return useMemo(() => {
    return {
      attrFlatList: {
        ListFooterComponent: footer,
        onEndReached: loadMoreData,
        onEndReachedThreshold: 0,
      },
      setCurrent,
    };
  }, [footer, loadMoreData, setCurrent]);
};
