import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const fontSize = {
  small: height * 0.014,
  body: height * 0.016,
  normal: height * 0.018,
  large: height * 0.022,
  extra: height * 0.024,
};

export const colors = {
  main: '#2c4eed',
  secondary: 'rgba(69, 71, 190, 0.5)',
  backdrop: '#e6e8e8',
  textDark: '#424141',
  textLight: 'white',
  shadow: 'rgba(0, 0, 0)',
  orange: '#e4be4c',
  pink: '#eb8fcd',
  green: '#8febbf',
};
