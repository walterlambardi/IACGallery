import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './backIcon.style';
import { BlurView } from '@react-native-community/blur';
import { isiOS } from '../../utils/platformUtils';
import { useNavigation } from '@react-navigation/native';

const BackIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <View style={styles.backIconContainer}>
        <>
          {isiOS && (
            <BlurView
              blurAmount={5}
              blurType={'light'}
              style={styles.blurView}
            />
          )}
          {!isiOS && <View style={styles.androidBlurView} />}
          <Icon name="chevron-left" style={styles.backIcon} />
        </>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackIcon;
