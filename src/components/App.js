import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <body className='page'>
      <div className='page__container'>
        <Header />

        <Main />

        <Footer />

        <div className='popup popup_type_profile'>
          <div className='popup__container'>
            <button
              className='popup__button-exit popup__close'
              type='button'
              value='close'
              aria-label='Кнопка закрытия'
            ></button>
            <h2 className='popup__title'>Редактировать профиль</h2>
            <form
              className='popup__form'
              id='editForm'
              name='editForm'
              novalidate
            >
              <input
                name='name'
                id='name'
                value=''
                className='popup__input popup__input_el_name'
                type='text'
                placeholder='Имя'
                minlength='2'
                maxlength='40'
                required
              />
              <span className='popup__error name-error'></span>
              <input
                name='about'
                id='description'
                value=''
                className='popup__input popup__input_el_description'
                type='text'
                placeholder='Описание'
                minlength='2'
                maxlength='200'
                required
              />
              <span className='popup__error description-error'></span>
              <button
                className='popup__button-submit popup__button-submit_type_edit'
                type='submit'
                value='save'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_add-card'>
          <div className='popup__container'>
            <button
              className='popup__button-exit popup__close'
              type='button'
              value='close'
              aria-label='Кнопка закрытия'
            ></button>
            <h2 className='popup__title'>Новое место</h2>
            <form
              className='popup__form'
              id='addCardForm'
              name='addCardForm'
              novalidate
            >
              <input
                name='title'
                id='title'
                value=''
                className='popup__input popup__input_el_name-card'
                type='text'
                placeholder='Название'
                minlength='2'
                maxlength='40'
                required
              />
              <span className='popup__error title-error'></span>
              <input
                name='link'
                id='link'
                value=''
                className='popup__input popup__input_el_link-card'
                type='url'
                placeholder='Ссылка на картинку'
                required
              />
              <span className='popup__error link-error'></span>
              <button
                className='popup__button-submit popup__button-submit_type_add-card'
                type='submit'
                value='save'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_image'>
          <figure className='popup__image-container'>
            <button
              className='popup__button-exit popup__close'
              type='button'
              value='close'
              aria-label='Кнопка закрытия'
            ></button>
            <img
              className='popup__image'
              src='#'
              alt=''
            />
            <h2 className='popup__image-heading'></h2>
          </figure>
        </div>

        <template
          className='card-template'
          id='cardTemplate'
        >
          <li className='element'>
            <button
              type='button'
              className='element__button-delete'
            ></button>
            <img
              src='#'
              alt=''
              className='element__image'
            />
            <div className='element__info'>
              <h2 className='element__title'></h2>
              <div className='element__like-container'>
                <button
                  aria-label='Нравится'
                  type='button'
                  className='element__button-like'
                ></button>
                <p className='element__like-counter'>0</p>
              </div>
            </div>
          </li>
        </template>

        <div className='popup popup_type_confirm'>
          <div className='popup__container'>
            <button
              className='popup__button-exit popup__close'
              type='button'
              value='close'
              aria-label='Кнопка закрытия'
            ></button>
            <h2 className='popup__title'>Вы уверены?</h2>
            <form
              className='popup__form'
              id='confirmForm'
              name='confirmForm'
            >
              <button
                className='popup__button-submit popup__button-submit_type_confirm'
                type='submit'
                value='save'
              >
                Да
              </button>
            </form>
          </div>
        </div>

        <div className='popup popup_type_avatar'>
          <div className='popup__container'>
            <button
              className='popup__button-exit popup__close'
              type='button'
              value='close'
              aria-label='Кнопка закрытия'
            ></button>
            <h2 className='popup__title'>Обновить аватар</h2>
            <form
              className='popup__form'
              id='avatarForm'
              name='avatarForm'
              novalidate
            >
              <input
                name='avatar'
                id='avatar'
                value=''
                className='popup__input popup__input_el_avatar'
                type='url'
                placeholder='Ссылка на картинку'
                required
              />
              <span className='popup__error avatar-error'></span>
              <button
                className='popup__button-submit popup__button-submit_type_avatar'
                type='submit'
                value='save'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
