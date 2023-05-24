import PopupWithForm from "./PopupWithForm";

export default function AddNewPlacePopup(props) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Сохранить"
      formName="addCardForm"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        name="title"
        id="title"
        value=""
        className="popup__input popup__input_el_name-card"
        type="text"
        placeholder="Название"
        minlength="2"
        maxlength="40"
        required
      />
      <span className="popup__error title-error"></span>
      <input
        name="link"
        id="link"
        value=""
        className="popup__input popup__input_el_link-card"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error link-error"></span>
    </PopupWithForm>
  );
}
