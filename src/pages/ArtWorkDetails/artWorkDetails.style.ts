import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
import { isAndroid } from '../../utils/platformUtils';

export const HEADER_HEIGHT = 400 * metrics.scaleCoefficient;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.grayLight,
    marginTop: -32 * metrics.scaleCoefficient,
    borderTopLeftRadius: 32 * metrics.scaleCoefficient,
    borderTopRightRadius: 32 * metrics.scaleCoefficient,
    padding: 20 * metrics.scaleCoefficient,
  },
  header: {
    overflow: 'hidden',
  },
  headerBackground: {
    ...StyleSheet.absoluteFillObject,
    height: HEADER_HEIGHT,
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  headerTitle: {
    position: 'absolute',
    top: 65 * metrics.scaleCoefficient,
    left: metrics.screenWidth / 5,
    right: metrics.screenWidth / 5,
    alignContent: 'center',
    fontSize: 16 * metrics.scaleCoefficient,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 3,
    color: colors.white,
  },
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
    width: 42 * metrics.scaleCoefficient,
    height: 42 * metrics.scaleCoefficient,
    backgroundColor: colors.grayLight,
    borderRadius: 14 * metrics.scaleCoefficient,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  backIcon: {
    color: colors.black,
    fontSize: 32 * metrics.scaleCoefficient,
  },
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
    width: 42 * metrics.scaleCoefficient,
    height: 42 * metrics.scaleCoefficient,
    backgroundColor: colors.grayLight,
    borderRadius: 14 * metrics.scaleCoefficient,
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 24 * metrics.scaleCoefficient,
    lineHeight: 26 * metrics.scaleCoefficient,
    paddingTop: 5 * metrics.scaleCoefficient,
    paddingBottom: 10 * metrics.scaleCoefficient,
    color: colors.black,
  },
  artist: {
    fontWeight: '400',
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 16 * metrics.scaleCoefficient,
    color: colors.black,
    paddingBottom: 10 * metrics.scaleCoefficient,
  },
  provenance: {
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    color: colors.gray,
    paddingBottom: 10 * metrics.scaleCoefficient,
  },
  space: {
    height: 40 * metrics.scaleCoefficient,
  },
});
