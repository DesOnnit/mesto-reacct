function Card (props) {
    function handleCardClick() {
        props.onCardClick(props.card)
      }
    return (
        <li id="elements__card">
        <div className="element">
            <img className="element__image" alt="" src={props.card.link} onClick={handleCardClick}/>
            <button type="button" className="element__trash transition-btn"></button>
            <div className="element__caption">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__caption_like">
                    <button type="button" className="element__like transition-like"></button>
                    <span className ="element__like_counter">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    </li>
    )
}
export default Card