export default function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.card ? "popup_opened" : ""}`}
    >
      <figure className="popup__image-container">
        <button
          className="popup__button-exit popup__close"
          onClick={props.onClose}
          type="button"
          value="close"
          aria-label="Кнопка закрытия"
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <h2 className="popup__image-heading">{props.card.name}</h2>
      </figure>
    </div>
  );
}
