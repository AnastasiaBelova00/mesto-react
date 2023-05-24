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
          value="close"
          aria-label="Кнопка закрытия"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={formName} novalidate>
          {children}

          <button className="popup__button-submit" type="submit" value="save">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
