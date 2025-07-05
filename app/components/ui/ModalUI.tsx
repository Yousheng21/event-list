import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import RNModal, { ModalProps } from 'react-native-modal';
import { colors } from '../../theme';

interface IProps extends Partial<ModalProps> {
  isVisible: boolean;
  onBack?: () => void;
}

export const ModalUI: FC<IProps> = ({ isVisible, onBack, children }) => {
  return (
    <RNModal
      isVisible={isVisible}
      backdropTransitionInTiming={800}
      onBackButtonPress={onBack}
      onBackdropPress={onBack}
      swipeDirection="down"
      onSwipeComplete={onBack}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={300}
      animationOutTiming={500}
      backdropColor="rgba(29, 46, 38, 0.75)"
      style={styles.modal}
    >
      <View style={styles.modalContent}>{children}</View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 22,
    elevation: 5,
    width: '100%',
    margin: 0,
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  modalContent: {
    height: '97%',
    margin: 0,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#51437A',
    overflow: 'hidden',
    backgroundColor: colors.backdrop,
  },
});
