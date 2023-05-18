import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: metrics.screenWidth,
    height: 400 * metrics.scaleCoefficient,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
