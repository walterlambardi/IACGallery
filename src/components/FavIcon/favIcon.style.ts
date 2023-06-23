import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
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
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  rightIcon: {
    fontSize: 24 * metrics.scaleCoefficient,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 14 * metrics.scaleCoefficient,
  },
  androidBlurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 14 * metrics.scaleCoefficient,
    backgroundColor: '#rgba(255, 255, 255, 0.4)',
  },
});