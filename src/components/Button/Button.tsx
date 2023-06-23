import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { colors, metrics } from '../../themes';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brand,
    paddingVertical: 12 * metrics.scaleCoefficient,
    paddingHorizontal: 24 * metrics.scaleCoefficient,
    borderRadius: 8 * metrics.scaleCoefficient,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16 * metrics.scaleCoefficient,
    fontWeight: 'bold',
  },
});

export default Button;
