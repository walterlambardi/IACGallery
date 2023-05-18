import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 10,
    lineHeight: 12,
    color: 'white',
    textAlign: 'center',
  },
  countContainer: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: 'green',
    borderRadius: 18,
    width: 14,
    height: 14,
    zIndex: 2,
    justifyContent: 'center',
  },
});
