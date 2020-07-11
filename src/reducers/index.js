import { combineReducers } from "redux";

function contacts(state = [], action) {
  switch (action.type) {
    case "ADD_CONTACT":
      // Menambahkan kontak baru kedalam daftar
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone
        }
      ];
    case "REMOVE_CONTACT":
      // Menghapus kontak dari daftar
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
}

export default combineReducers({
    contacts
})