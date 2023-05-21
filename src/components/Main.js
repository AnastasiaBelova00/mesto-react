export default function Main() {
  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container'>
          <img
            className='profile__image'
            src='#'
            alt='Фото владельца профиля'
          />
          <button
            className='profile__button-avatar'
            type='button'
            aria-label='Кнопка смены аватара'
          ></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>Майкл Скотт</h1>
          <p className='profile__description'>Лучший в мире босс</p>
          <button
            className='profile__button-edit'
            aria-label='Кнопка редактирования'
            type='button'
          ></button>
        </div>
        <button
          className='profile__button-add'
          aria-label='Кнопка добавления'
          type='button'
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__grid'></ul>
      </section>
    </main>
  );
}
