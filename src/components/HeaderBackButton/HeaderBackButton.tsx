import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './headerBackButton.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, metrics } from '../../themes';
import { useNavigation } from '@react-navigation/native';

const HeaderBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View style={styles.container}>
        <Icon
          name="chevron-back-outline"
          size={28 * metrics.scaleCoefficient}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderBackButton;
