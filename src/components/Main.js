import React from "react";
import api from "../utils/api";
import Card from "./Card";
function Main ({onEditProfile,onAddPlace,onEditAvatar,onCardClick}) {
    const [currentUser, setCurrentUser] = React.useState({})

    const [cards, setCards] = React.useState([])

    React.useEffect (() => {
        api.getUserInfo ()
        .then ((res) => {
            setCurrentUser(res)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    React.useEffect (() => {
        api.getInitialCards ()
        .then ((res) => {
            setCards(res)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <main>
    <section className="profile">
        <div className="profile__avatar-container">
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
            <button type="button" className="profile__avatar-edit-button" onClick={onEditAvatar}></button>  
        </div>
        <div className="profile__info">
            <h1 className="profile__info-title">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button transition-btn" onClick={onEditProfile}></button>
            <h2 className="profile__info-subtitle">{currentUser.about}</h2>
        </div>
        <button type="button" className="profile__add-button transition-btn" onClick={onAddPlace}></button>
    </section>
    <section>
        <ul className="elements">
            {
                cards.map((card) => 
                <Card 
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                />
                )
            }
        </ul>   
    </section>
    </main>
    );
}

export default Main