export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <button type="button" className="element__button-delete"></button>
      <img
        src={props.link}
        alt={props.name}
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button
            aria-label="Нравится"
            type="button"
            className="element__button-like"
          ></button>
          <p className="element__like-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}
