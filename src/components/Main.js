import { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__image"
            src={userAvatar}
            alt="Фото владельца профиля"
          />
          <button
            className="profile__button-avatar"
            onClick={onEditAvatar}
            type="button"
            aria-label="Кнопка смены аватара"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            className="profile__button-edit"
            onClick={onEditProfile}
            aria-label="Кнопка редактирования"
            type="button"
          ></button>
        </div>
        <button
          className="profile__button-add"
          onClick={onAddPlace}
          aria-label="Кнопка добавления"
          type="button"
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
