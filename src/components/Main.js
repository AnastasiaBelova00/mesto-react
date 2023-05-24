export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__image"
            src="#"
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
          <h1 className="profile__name">Майкл Скотт</h1>
          <p className="profile__description">Лучший в мире босс</p>
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
        <ul className="elements__grid"></ul>
      </section>

      <template className="card-template" id="cardTemplate">
        <li className="element">
          <button type="button" className="element__button-delete"></button>
          <img src="#" alt="" className="element__image" />
          <div className="element__info">
            <h2 className="element__title"></h2>
            <div className="element__like-container">
              <button
                aria-label="Нравится"
                type="button"
                className="element__button-like"
              ></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button
            className="popup__button-exit popup__close"
            type="button"
            value="close"
            aria-label="Кнопка закрытия"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" id="confirmForm" name="confirmForm">
            <button
              className="popup__button-submit popup__button-submit_type_confirm"
              type="submit"
              value="save"
            >
              Да
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
