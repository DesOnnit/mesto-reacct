import PopupWithForm from "./PopupWithForm"
function ProfileChange (props) {
    return (
        <PopupWithForm 
        name = "edit"
        title = "Редактировать профиль"
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        >
        <label className="popup__label">
            <input type="text" className="popup__input" id="name" name="name" value="Жак-Ив Кусто" minlength="2" maxlength="40" placeholder="Имя" required />
            <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__label">
            <input type="text" className="popup__input" id="job" name="job" value="Исследователь океана" minlength="2" maxlength="200" placeholder="Работа" required />
            <span className="popup__error" id="job-error"></span>   
        </label>
        </PopupWithForm>
    )
}

export default ProfileChange