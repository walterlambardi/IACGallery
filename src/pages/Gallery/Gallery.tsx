import { StatusBar, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import styles from './gallery.style';
import {
  galleryApi,
  useGetGalleryArtWorksQuery,
} from '../../services/galleryApi';
import { useAppDispatch } from '../../store';
import config from '../../config';
import { setImageResourceUrl } from '../../store/favorites';
import ArtWorkList from '../../components/ArtWorkList';

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.GALLERY
>;

const Gallery = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { data: results, isLoading, error } = useGetGalleryArtWorksQuery(page);

  useEffect(() => {
    dispatch(setImageResourceUrl(results?.iiif_url || config.BASE_IMAGE_URL));
  }, [dispatch, results?.iiif_url]);

  const filterData = useMemo(() => {
    return results?.artworks?.filter(
      (artWork: { image_id: string }) => !!artWork.image_id,
    );
  }, [results]);

  const handleEndReached = useCallback(() => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  }, [isLoading]);

  // ErrorBoundary handles error
  if (error) {
    throw new Error("Oops, there's an issue with the API.");
  }

  const handleRefresh = () => {
    dispatch(galleryApi.util.resetApiState());
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
        hidden={false}
      />
      <ArtWorkList
        data={filterData || []}
        handleEndReached={handleEndReached}
        isLoading={isLoading}
        refresh={handleRefresh}
      />
    </View>
  );
};

export default Gallery;
