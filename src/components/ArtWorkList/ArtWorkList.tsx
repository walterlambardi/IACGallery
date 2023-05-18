import React, { useCallback } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Artwork } from '../../types/ArtWorkTypes';
import ArtWorkCard from '../ArtWorkCard';
import { Pages } from '../../enums/Pages';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import {
  useGetImageUrl,
  useResourceImageUrl,
} from '../../hooks/useImageResourceUrl';
import styles from './artWorkList.style';
import { colors } from '../../themes';

type NavProps = NativeStackNavigationProp<RootStackParams, Pages.GALLERY>;

interface IArtWorkListProps {
  data: Artwork[];
  handleEndReached?: () => void;
  isLoading?: boolean;
}
const ArtWorkList = ({
  data,
  handleEndReached,
  isLoading = false,
}: IArtWorkListProps) => {
  const navigation = useNavigation<NavProps>();
  const resourceImgUrl = useResourceImageUrl();
  const getImageUrl = useGetImageUrl(resourceImgUrl);

  const goToDetails = useCallback(
    (artWork: Artwork) => {
      navigation.navigate(Pages.ARTWORK_DETAILS, { artWork });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: Artwork }) => {
      const artWorkImage = getImageUrl(item.image_id);
      const handleGoToDetails = () => goToDetails(item);
      return (
        <ArtWorkCard
          artWork={item}
          artWorkImage={artWorkImage}
          goToDetails={handleGoToDetails}
          style={styles.cardStyle}
        />
      );
    },
    [getImageUrl, goToDetails],
  );

  const keyExtractor = (item: Artwork) => `item-${item?.id}-${item?.image_id}`;

  const renderActivityIndicator = useCallback(() => {
    if (isLoading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color={colors.black} />
        </View>
      );
    }
    return null;
  }, [isLoading]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      scrollEventThrottle={16}
      ListFooterComponent={renderActivityIndicator}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default ArtWorkList;
