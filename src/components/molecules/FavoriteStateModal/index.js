import React from 'react'
import { Text } from '~/components/atoms'
import {
    Modal,
    ModalBackGroundContainer,
    ModalContentContainer,
    FavoriteImage
} from './styles'
import favoriteAdded from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export const FavoritesStateModal = ({ visible, onClose, type }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <ModalBackGroundContainer>
                <ModalContentContainer>
                    <FavoriteImage source={ type === 'added' ? favoriteAdded : favoriteRemoved }/>
                    <Text mt={24} align='center' size={28} fontFamily='bold'>
                        {`Favorito ${type === 'added' ? 'adicionado' : 'removido'} com sucesso!`}
                    </Text>
                </ModalContentContainer>
            </ModalBackGroundContainer>
        </Modal>
    )
}