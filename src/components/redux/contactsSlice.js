import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

let contactsInitialSlice = localStorage.getItem('Contacts')
  ? JSON.parse(localStorage.getItem('Contacts'))
  : [];

if (localStorage.getItem('Contacts')) {
  const savedContacts = JSON.parse(localStorage.getItem('Contacts'));
  contactsInitialSlice = [...savedContacts];
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialSlice,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
