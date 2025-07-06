import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import img from '../../../assets/notFound.png';
import { fontSize } from '../../../theme';

export const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img} />
      <Text style={styles.text}>Ничего не удалось найти, попробуйте изменить поисковой запрос</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 50,
    height: 500
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    textAlign: "center",
    fontSize: fontSize.large
  }
});
