import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 10 * metrics.scaleCoefficient,
    paddingHorizontal: 20 * metrics.scaleCoefficient,
  },
  cardStyle: {
    marginVertical: 10 * metrics.scaleCoefficient,
  },
  activityIndicator: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40 * metrics.scaleCoefficient,
  },
});
