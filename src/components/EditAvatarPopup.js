import PopupWithForm from "./PopupWithForm";
import { createRef } from "react";

export default function EditAvatarPopup(props) {
  const avatarInputRef = createRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      formName="avatarForm"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="avatar"
        ref={avatarInputRef}
        id="avatar"
        className="popup__input popup__input_el_avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error avatar-error"></span>
    </PopupWithForm>
  );
}
