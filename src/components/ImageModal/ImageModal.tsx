import React from 'react';
import { View, Modal, Image } from 'react-native';
import styles from './imageModal.style';
import { TouchableOpacity } from 'react-native';

interface ImageModalProps {
  image: string;
  handleCloseImageModal: () => void;
  visible: boolean;
}

const ImageModal = ({
  image,
  handleCloseImageModal,
  visible,
}: ImageModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={handleCloseImageModal}
      statusBarTranslucent={true}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={handleCloseImageModal}>
          <Image
            style={styles.modalImage}
            source={{ uri: image }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImageModal;
