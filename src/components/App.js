import React from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import CardDeletePopup from './CardDeletePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick () {
        setEditProfilePopupOpen(true)
    } 
    function handleEditAvatarClick () {
        setEditAvatarPopupOpen(true)
    }
    function handleAddPlaceClick () {
        setAddPlacePopupOpen(true)
    }
    function closeAllPopups () {
        setEditProfilePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard(null)
    }
    function handleCardClick (card) {
        setSelectedCard (card)
    }   

  return ( 
    <div className="page">
        <Header />
        <Main
            onEditProfile = {handleEditProfileClick} 
            onAddPlace = {handleAddPlaceClick} 
            onEditAvatar = {handleEditAvatarClick}
            onCardClick = {handleCardClick} 
        />
        <Footer />
        <EditProfilePopup 
            isOpen = {isEditProfilePopupOpen}
            onClose = {closeAllPopups}
        />
        <AddPlacePopup 
            isOpen = {isAddPlacePopupOpen}
            onClose = {closeAllPopups}
        />
        <ImagePopup />
        <EditAvatarPopup 
            isOpen = {isEditAvatarPopupOpen}
            onClose = {closeAllPopups}
        />
        <CardDeletePopup />
        <ImagePopup
            card = {selectedCard}
            onClose = {closeAllPopups}
        />
    </div>
  )
}

export default App;
