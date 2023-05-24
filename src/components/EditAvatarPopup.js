import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      formName="avatarForm"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        name="avatar"
        id="avatar"
        value=""
        className="popup__input popup__input_el_avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error avatar-error"></span>
    </PopupWithForm>
  );
}
