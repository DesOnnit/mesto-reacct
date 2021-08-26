import React from "react";
function Login() {

    return (
        <div className="sign-window">
            <form className="sign-window__form">
                <h2 className="sign-window__title">
                    Вход
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
                <button className="sign-window__button">
                    Войти
                </button>
            </form>
        </div>
    )
}


export default Login