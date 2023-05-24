import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      formName="editForm"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        name="name"
        id="name"
        className="popup__input popup__input_el_name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error name-error"></span>
      <input
        name="about"
        id="description"
        className="popup__input popup__input_el_description"
        type="text"
        placeholder="Описание"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error description-error"></span>
    </PopupWithForm>
  );
}
