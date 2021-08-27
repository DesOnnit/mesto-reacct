import { Link } from "react-router-dom";

function Register() {

    return (
        <div className="sign-window">
            <form className="sign-window__form">
                <h2 className="sign-window__title">
                    Регистрация
                </h2>
                <label className="popup__label">
                    <input
                        type="email"
                        id="email"
                        className="sign-window__input"
                        minLength="2"
                        maxLength="200"
                        placeholder="Email"
                        required>
                    </input>
                    <span
                        className="popup__error"
                        id="email-error">
                    </span>
                </label>
                <label className="popup__label">
                    <input
                        type="password"
                        id="password"
                        className="sign-window__input"
                        minLength="2"
                        maxLength="200"
                        placeholder="Пароль"
                        required>
                    </input>
                    <span
                        className="popup__error"
                        id="password-error">
                    </span>
                </label>
                <button className="sign-window__button transition">
                    Зарегистрироваться
                </button>
            </form>
            <div className="sign-window__segue">
                <h3 className="sign-window__link">
                    Уже зарегистрированы?
                </h3>
                <Link to="/sign-in"
                    className="sign-window__link transition-btn">
                    Войти
                </Link>
            </div>
        </div>
    )
}

export default Register