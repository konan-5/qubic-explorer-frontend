import { createSelector, createSlice } from '@reduxjs/toolkit';
import i18n from 'src/i18n';
import { setDefaultSettings } from './fuse/settingsSlice';

export const changeLanguage = (languageId) => (dispatch, getState) => {
  const { direction } = getState().fuse.settings.defaults;
  const newLangDirection = i18n.dir(languageId);

  if (newLangDirection !== direction) {
    dispatch(setDefaultSettings({ direction: newLangDirection }));
  }

  return i18n.changeLanguage(languageId).then(() => {
    localStorage.setItem('lng', languageId);
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: i18n.options.lng, // Use the saved language from localStorage if available
    languages: [
      { id: 'en', title: 'English' },
      { id: 'de', title: 'Deutsch' },
      { id: 'es', title: 'Español' },
      { id: 'fr', title: 'Français' },
      { id: 'nl', title: 'Nederlands' },
      { id: 'ru', title: 'Русский' },
      { id: 'pt', title: 'Português' },
      { id: 'tr', title: 'Türkçe' },
      { id: 'cn', title: '中文' },
      { id: 'jp', title: '日本語' },
      { id: 'ar', title: 'العربية' },
    ],
  },
  reducers: {
    languageChanged: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const selectCurrentLanguageId = ({ i18n: _i18n }) => _i18n.language;

export const selectLanguages = ({ i18n: _i18n }) => _i18n.languages;

export const selectCurrentLanguageDirection = createSelector([selectCurrentLanguageId], (id) => {
  return i18n.dir(id);
});

export const selectCurrentLanguage = createSelector(
  [selectCurrentLanguageId, selectLanguages],
  (id, languages) => {
    return languages.find((lng) => lng.id === id);
  }
);

export default i18nSlice.reducer;
