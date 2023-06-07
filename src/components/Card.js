import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useContext } from "react";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      {isOwn && (
        <button
          type="button"
          className="element__button-delete"
          // onClick={handleDeleteClick}
        ></button>
      )}
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
            className={`element__button-like ${
              isLiked && "element__button-like_active"
            }`}
            // onClick={handleClickLike}
          ></button>
          <p className="element__like-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}
