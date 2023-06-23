import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
import { isAndroid } from '../../utils/platformUtils';

export default StyleSheet.create({
  backIconContainer: {
    zIndex: 9,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: isAndroid
      ? 54 * metrics.scaleCoefficient
      : 52 * metrics.scaleCoefficient,
    left: 20 * metrics.scaleCoefficient,
    width: 40 * metrics.scaleCoefficient,
    height: 40 * metrics.scaleCoefficient,
  },
  backIcon: {
    color: colors.white,
    fontSize: 32 * metrics.scaleCoefficient,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8 * metrics.scaleCoefficient,
  },
  androidBlurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8 * metrics.scaleCoefficient,
    backgroundColor: '#rgba(255, 255, 255, 0.4)',
  },
});
