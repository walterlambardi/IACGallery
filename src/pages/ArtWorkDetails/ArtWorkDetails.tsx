import {
  Animated,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './artWorkDetails.style';
import {
  useGetImageUrl,
  useResourceImageUrl,
} from '../../hooks/useImageResourceUrl';
import {
  headerHeightProgress,
  imageOverlarOpacity,
  titleOpacity,
} from './artWorkDetails.animations';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { toggleIsFavorite } from '../../store/favorites';
import { useDispatch } from 'react-redux';
import { useIsFavorite } from '../../hooks/useFavoritesHooks';
import { colors } from '../../themes';
import ImageModal from '../../components/ImageModal';
import copies from '../../utils/copies';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.ARTWORK_DETAILS
>;

const ArtWorkDetails = ({ navigation, route }: CreateAccountProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { artWork } = route.params;
  const { id, title, image_id, artist_display, provenance_text } = artWork;
  const resourceImgUrl = useResourceImageUrl();
  const getImageUrl = useGetImageUrl(resourceImgUrl);
  const artWorkImage = getImageUrl(image_id, true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const isFav = useIsFavorite(id);

  const handleToggleModal = () => setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <TouchableWithoutFeedback onPress={handleToggleModal}>
        <Animated.View
          style={[styles.header, { height: headerHeightProgress(scrollY) }]}>
          <TouchableWithoutFeedback onPress={navigation.goBack}>
            <View style={styles.backIconContainer}>
              <Icon name="chevron-left" style={styles.backIcon} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => dispatch(toggleIsFavorite(artWork))}>
            <View style={styles.rightIconContainer}>
              <Icon
                name={isFav ? 'heart' : 'heart-outline'}
                style={styles.rightIcon}
                color={isFav ? colors.brand : colors.black}
              />
            </View>
          </TouchableWithoutFeedback>
          <Animated.Text
            numberOfLines={1}
            style={[styles.headerTitle, { opacity: titleOpacity(scrollY) }]}>
            {title}
          </Animated.Text>
          <>
            <Animated.Image
              source={{
                uri: artWorkImage,
              }}
              style={[
                styles.headerBackground,
                { height: headerHeightProgress(scrollY) },
              ]}
            />
            <Animated.View
              style={[
                styles.overlay,
                { opacity: imageOverlarOpacity(scrollY) },
              ]}
            />
          </>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}>
        <Text style={styles.title}>{title}</Text>

        {!!artist_display && (
          <Text numberOfLines={3} style={styles.artist}>
            {artist_display}
          </Text>
        )}

        {!!provenance_text && (
          <Text style={styles.provenance}>{provenance_text}</Text>
        )}

        <Text style={styles.provenance}>{copies.artWorkMockDetail}</Text>
        <Text style={styles.provenance}>{copies.artWorkMockDetail}</Text>
        <Text style={styles.provenance}>{copies.artWorkMockDetail}</Text>
        <View style={styles.space} />
      </Animated.ScrollView>
      <ImageModal
        image={artWorkImage}
        visible={modalVisible}
        handleCloseImageModal={handleToggleModal}
      />
    </View>
  );
};

export default ArtWorkDetails;
