import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, { filter }) => {
    // {console.log(filter)
    if (contacts === []) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
