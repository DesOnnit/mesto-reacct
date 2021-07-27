import PopupWithForm from "./PopupWithForm";
function CardDelet (props) {
    return (
        <PopupWithForm
        name = "delet"
        title = "Вы уверены?"
        isOpen = {props.isOpen}
        >

        </PopupWithForm>
    )
}

export default CardDelet