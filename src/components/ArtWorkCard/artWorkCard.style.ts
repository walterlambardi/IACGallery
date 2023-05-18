import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 20 * metrics.scaleCoefficient,
  },
  artWorkImage: {
    width: 100 * metrics.scaleCoefficient,
    height: 100 * metrics.scaleCoefficient,
    borderRadius: 10 * metrics.scaleCoefficient,
  },
});
