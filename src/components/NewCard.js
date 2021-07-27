import PopupWithForm from "./PopupWithForm";
function NewCard (props) {
    return (
        <PopupWithForm 
        name = "card"
        title = "Новое место"
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        >
            <label className="popup__label">
                <input type="text" className="popup__input" id="title" name="name" placeholder="Название" minlength="2" maxlength="30" required />
                <span className="popup__error" id="title-error"></span>
            </label>
            <label className="popup__label">
                <input type="url" className="popup__input" id="link" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="link-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default NewCard