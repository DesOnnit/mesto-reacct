import PopupWithForm from "./PopupWithForm";
function AddPlacePopup (props) {
    return (
        <PopupWithForm 
        name = "card"
        title = "Новое место"
        button = "Сохранить"
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        >
            <label className="popup__label">
                <input type="text" className="popup__input" id="title" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__error" id="title-error"></span>
            </label>
            <label className="popup__label">
                <input type="url" className="popup__input" id="link" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="link-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup