import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 10 * metrics.scaleCoefficient,
    lineHeight: 12 * metrics.scaleCoefficient,
    color: colors.white,
    textAlign: 'center',
  },
  countContainer: {
    position: 'absolute',
    top: -3 * metrics.scaleCoefficient,
    right: -6 * metrics.scaleCoefficient,
    backgroundColor: colors.green,
    borderRadius: 8 * metrics.scaleCoefficient,
    width: 16 * metrics.scaleCoefficient,
    height: 16 * metrics.scaleCoefficient,
    zIndex: 2,
    justifyContent: 'center',
  },
});
