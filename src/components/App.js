import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddNewPlacePopup from "./AddNewPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    // const popup = document.querySelector(".popup_type_avatar");
    // popup.classList.add("popup_opened");
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    // const popup = document.querySelector(".popup_type_profile");
    // popup.classList.add("popup_opened");
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    // const popup = document.querySelector(".popup_type_add-card");
    // popup.classList.add("popup_opened");
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <body className="page">
      <div className="page__container">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <AddNewPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </body>
  );
}
