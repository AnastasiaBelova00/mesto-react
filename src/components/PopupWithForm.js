import React from "react";

export default function PopupWithForm({
  name,
  title,
  children,
  buttonText,
  formName,
  isOpen,
  onClose,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-exit"
          onClick={onClose}
          type="button"
          aria-label="Кнопка закрытия"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={formName}>
          {children}

          <button className="popup__button-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
