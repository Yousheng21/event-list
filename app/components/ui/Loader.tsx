import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
} from 'react-native';

interface Prop extends ActivityIndicatorProps {
  style?: StyleProp<ViewStyle>;
}

export const Loader = ({ style, ...props }: Prop) => (
  <ActivityIndicator size="large" color="#30D058" style={style} {...props} />
);
