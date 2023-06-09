import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  artWorkImageStyle: {
    borderRadius: 10 * metrics.scaleCoefficient,
  },
  artWorkImage: {
    width: '100%',
    height: 240 * metrics.scaleCoefficient,
    borderRadius: 10 * metrics.scaleCoefficient,
    backgroundColor: colors.white,
    overflow: 'visible',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    flex: 1,
  },
  content: {
    position: 'absolute',
    bottom: 15 * metrics.scaleCoefficient,
    paddingHorizontal: 15 * metrics.scaleCoefficient,
  },
  artWorktTitle: {
    color: colors.white,
    fontSize: 22 * metrics.scaleCoefficient,
    lineHeight: 26 * metrics.scaleCoefficient,
    fontWeight: '900',
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 40,
  },
  artist: {
    color: colors.white,
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    fontWeight: '400',
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 40,
    marginTop: 5 * metrics.scaleCoefficient,
  },
  favContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 14 * metrics.scaleCoefficient,
    right: 14 * metrics.scaleCoefficient,
    width: 34 * metrics.scaleCoefficient,
    height: 34 * metrics.scaleCoefficient,
    borderRadius: 17 * metrics.scaleCoefficient,
    backgroundColor: colors.blackTransparent,
  },
  favContent: {
    flex: 1,
    justifyContent: 'center',
  },
});
