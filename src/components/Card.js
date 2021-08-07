import React from "react"
import {CurrentUserContext} from '../contexts/CurrentUserContext'
function Card (props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id !== currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardDeleteButtonClassName = (
        `element__trash transition-btn ${isOwn ? '' : 'element__trash_active'}`); 
    const cardLikeButtonClassName = (
            `element__like transition-like ${isLiked ? 'element__like_acive' : ''}`); 

    function handleCardClick() {
        props.onCardClick(props.card)
      }
    function handleLikeClick() {
          props.onCardLike(props.card)
      }
    function handleCardDelet () {
        props.onCardDelet(props.card)
    }
    return (
        <li id="elements__card">
        <div className="element">
            <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleCardClick}/>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelet} ></button>
            <div className="element__caption">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__caption_like">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <span className ="element__like_counter">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    </li>
    )
}
export default Card