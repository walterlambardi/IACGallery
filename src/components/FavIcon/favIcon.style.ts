import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';
import { isAndroid } from '../../utils/platformUtils';

export default StyleSheet.create({
  rightIconContainer: {
    zIndex: 9,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: isAndroid
      ? 54 * metrics.scaleCoefficient
      : 52 * metrics.scaleCoefficient,
    right: 20 * metrics.scaleCoefficient,
    width: 40 * metrics.scaleCoefficient,
    height: 40 * metrics.scaleCoefficient,
    borderRadius: 8 * metrics.scaleCoefficient,
  },
  rightIcon: {
    fontSize: 24 * metrics.scaleCoefficient,
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
