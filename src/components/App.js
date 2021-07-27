import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import ProfileChange from './ProfileChange';
import NewCard from './NewCard';
import ImagePopup from './ImagePopup';
import AvatarChange from './AvatarChange';
import CardDelet from './CardDelet';

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
    <body className="page">
        <Header />
        <Main
        onEditProfile = {handleEditProfileClick} 
        onAddPlace = {handleAddPlaceClick} 
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick} 
        />
        <Footer />
        <ProfileChange 
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        />
        <NewCard 
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        />
        <ImagePopup />
        <AvatarChange 
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        />
        <CardDelet />
        <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
        />
    </body>
  )
}

export default App;
