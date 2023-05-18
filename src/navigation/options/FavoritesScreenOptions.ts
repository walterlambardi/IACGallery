import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.brand,
  },
  headerTitleStyle: {
    color: colors.white,
  },
});

export const FavoritesScreenOptions = () => {
  return {
    title: 'My Favorites',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
  };
};
