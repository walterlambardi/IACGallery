import {
  Animated,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
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
import { useIsFavorite } from '../../hooks/useFavoritesHooks';
import ImageModal from '../../components/ImageModal';
import copies from '../../utils/copies';
import FavIcon from '../../components/FavIcon';
import BackIcon from '../../components/BackIcon';
import Share from 'react-native-share';
import Button from '../../components/Button';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.ARTWORK_DETAILS
>;

const ArtWorkDetails = ({ route }: CreateAccountProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { artWork } = route.params;
  const { id, title, image_id, artist_display, provenance_text } = artWork;
  const resourceImgUrl = useResourceImageUrl();
  const getImageUrl = useGetImageUrl(resourceImgUrl);
  const artWorkImage = getImageUrl(image_id, true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const isFav = useIsFavorite(id);

  const handleToggleModal = () => setModalVisible(!modalVisible);

  const onShare = useCallback(async () => {
    try {
      const result = await Share.open({
        title: 'This is amazing',
        message: `Hey! look a this picture \n${title}`,
        url: artWorkImage,
      });
      if (result.success) {
        console.log('Success shared');
      } else {
        console.log('Error on shared');
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }, [artWorkImage, title]);

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
          <BackIcon />
          <FavIcon artWork={artWork} isFav={isFav} />
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

        <Button title="Share" onPress={onShare} buttonStyle={styles.shareBtn} />

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
