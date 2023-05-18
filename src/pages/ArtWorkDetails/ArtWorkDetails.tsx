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

  const handleShowImageModal = () => {
    return setModalVisible(true);
  };

  const handleCloseImageModal = () => {
    return setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <TouchableWithoutFeedback onPress={handleShowImageModal}>
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
                color={colors.brand}
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

        {artist_display && (
          <Text numberOfLines={3} style={styles.artist}>
            {artist_display}
          </Text>
        )}
        <Text style={styles.provenance}>{provenance_text}</Text>

        <Text style={styles.provenance}>
          {
            'Dr. Reuling, Baltimore, 1902 [according to the catalogue of the Stillwell sale]. Dr. John E. Stillwell, New York, by 1927; sold, American Art Association, Anderson Galleries, New York, Dec. 1–3, 1927, no. 454, as Georg Pentz [sic], to Kleinberger for $4,750 [according to Charles Worcester’s annotation on the back of a photo in the curatorial file]. Kleinberger, New York and Paris, 1927–Oct. 1928; sold to Charles H. Worcester, Chicago, 1928 [invoice dated Oct. 13, 1928, Art Institute Archives; copy in curatorial file]; on loan to the AIC from 1928; given to the AIC, 1940.\n\nRobert Hoe (d, 1909), New York [according to reverse of Weitzner photo in curatorial file].  M. Knoedler & Co [according to reverse of Weitzner photo in curatorial file and mount of photo in the Witt Library, London].  Sold Christies, London, 17 January 1969, lot. 137 to Gregory (possibly agent for Weitzner).  Sold by Julius H. Weitzner, London, to the Art Institute, 1969.\n\nJohann Dominik Bossi (died 1853), Munich; by descent to his daughter, Maria Theresa Caroline Bossi (died 1881), and her husband, Carl Christian Friedrich Beyerlen (died 1881), Stuttgart [according to Knox 1980]; sold, H. G. Gutekunst, Stuttgart, March 27, 1882, to Dr. O. Eisenmann, Director of the Gallery at Cassel on behalf of Wilhelm Lübke (died 1893), Stuttgart [according to Knox 1980]; probably sold by the estate of Wilhelm Lübke to Joseph Baer & Sons, Frankfurt [according to Wendland’s oral history and Knox 1980]; sold to Dr. Hans Wendland, Lugano, after 1919 [according to Wedland’s oral history and Knox 1980]. Sold by A & R Ball, New York, to the Art Institute, 1942.'
          }
        </Text>
        <Text style={styles.provenance}>
          {
            'Dr. Reuling, Baltimore, 1902 [according to the catalogue of the Stillwell sale]. Dr. John E. Stillwell, New York, by 1927; sold, American Art Association, Anderson Galleries, New York, Dec. 1–3, 1927, no. 454, as Georg Pentz [sic], to Kleinberger for $4,750 [according to Charles Worcester’s annotation on the back of a photo in the curatorial file]. Kleinberger, New York and Paris, 1927–Oct. 1928; sold to Charles H. Worcester, Chicago, 1928 [invoice dated Oct. 13, 1928, Art Institute Archives; copy in curatorial file]; on loan to the AIC from 1928; given to the AIC, 1940.\n\nRobert Hoe (d, 1909), New York [according to reverse of Weitzner photo in curatorial file].  M. Knoedler & Co [according to reverse of Weitzner photo in curatorial file and mount of photo in the Witt Library, London].  Sold Christies, London, 17 January 1969, lot. 137 to Gregory (possibly agent for Weitzner).  Sold by Julius H. Weitzner, London, to the Art Institute, 1969.\n\nJohann Dominik Bossi (died 1853), Munich; by descent to his daughter, Maria Theresa Caroline Bossi (died 1881), and her husband, Carl Christian Friedrich Beyerlen (died 1881), Stuttgart [according to Knox 1980]; sold, H. G. Gutekunst, Stuttgart, March 27, 1882, to Dr. O. Eisenmann, Director of the Gallery at Cassel on behalf of Wilhelm Lübke (died 1893), Stuttgart [according to Knox 1980]; probably sold by the estate of Wilhelm Lübke to Joseph Baer & Sons, Frankfurt [according to Wendland’s oral history and Knox 1980]; sold to Dr. Hans Wendland, Lugano, after 1919 [according to Wedland’s oral history and Knox 1980]. Sold by A & R Ball, New York, to the Art Institute, 1942.'
          }
        </Text>
        <Text style={styles.provenance}>
          {
            'Dr. Reuling, Baltimore, 1902 [according to the catalogue of the Stillwell sale]. Dr. John E. Stillwell, New York, by 1927; sold, American Art Association, Anderson Galleries, New York, Dec. 1–3, 1927, no. 454, as Georg Pentz [sic], to Kleinberger for $4,750 [according to Charles Worcester’s annotation on the back of a photo in the curatorial file]. Kleinberger, New York and Paris, 1927–Oct. 1928; sold to Charles H. Worcester, Chicago, 1928 [invoice dated Oct. 13, 1928, Art Institute Archives; copy in curatorial file]; on loan to the AIC from 1928; given to the AIC, 1940.\n\nRobert Hoe (d, 1909), New York [according to reverse of Weitzner photo in curatorial file].  M. Knoedler & Co [according to reverse of Weitzner photo in curatorial file and mount of photo in the Witt Library, London].  Sold Christies, London, 17 January 1969, lot. 137 to Gregory (possibly agent for Weitzner).  Sold by Julius H. Weitzner, London, to the Art Institute, 1969.\n\nJohann Dominik Bossi (died 1853), Munich; by descent to his daughter, Maria Theresa Caroline Bossi (died 1881), and her husband, Carl Christian Friedrich Beyerlen (died 1881), Stuttgart [according to Knox 1980]; sold, H. G. Gutekunst, Stuttgart, March 27, 1882, to Dr. O. Eisenmann, Director of the Gallery at Cassel on behalf of Wilhelm Lübke (died 1893), Stuttgart [according to Knox 1980]; probably sold by the estate of Wilhelm Lübke to Joseph Baer & Sons, Frankfurt [according to Wendland’s oral history and Knox 1980]; sold to Dr. Hans Wendland, Lugano, after 1919 [according to Wedland’s oral history and Knox 1980]. Sold by A & R Ball, New York, to the Art Institute, 1942.'
          }
        </Text>
        <View style={styles.space} />
      </Animated.ScrollView>
      <ImageModal
        image={artWorkImage}
        visible={modalVisible}
        handleCloseImageModal={handleCloseImageModal}
      />
    </View>
  );
};

export default ArtWorkDetails;
