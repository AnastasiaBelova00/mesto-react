export default function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__image-container">
        <button
          className="popup__button-exit popup__close"
          type="button"
          value="close"
          aria-label="Кнопка закрытия"
        ></button>
        <img className="popup__image" src="#" alt="" />
        <h2 className="popup__image-heading"></h2>
      </figure>
    </div>
  );
}
