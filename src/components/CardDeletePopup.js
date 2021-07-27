import PopupWithForm from "./PopupWithForm";
function CardDeletePopup (props) {
    return (
        <PopupWithForm 
        name = "delet"
        title = "Вы уверены?"
        isOpen = {props.isOpen}
        />
    )
}

export default CardDeletePopup