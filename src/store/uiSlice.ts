import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * State interface for the UI slice.
 */
export interface UiState {
  /** Indicates if the slide-out navigation menu is open */
  isMenuOpen: boolean;
  /** Currently selected language (e.g., 'EN') */
  language: string;
}

const initialState: UiState = {
  isMenuOpen: false,
  language: 'EN',
};

/**
 * Redux Toolkit slice to manage global UI states like navigation drawer toggles
 * and language preferences.
 */
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /**
     * Toggles the navigation menu open/closed state.
     */
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    /**
     * Sets the navigation menu open/closed state explicitly.
     */
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    /**
     * Updates the active language.
     */
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen, setLanguage } = uiSlice.actions;

export default uiSlice.reducer;
